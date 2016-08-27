// Babel ES6/JSX Compiler
require('babel-register');

var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var compression = require('compression');
var favicon = require('serve-favicon');
var logger = require('morgan');
var async = require('async');
var fs = require('fs');
var colors = require('colors');
var mongoose = require('mongoose');
var request = require('request');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var swig  = require('swig');
var xml2js = require('xml2js');
var _ = require('underscore');

var db = require('./db');
var config = require('./config');
var routes = require('./app/routes');

var Items = require('./models/items');

var app = express();

mongoose.connect(config.database);

app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(express.static(path.join(__dirname, 'public')));

// //Api Controller handler
// fs.readdirSync('./api').forEach(function (file) {
//   if(file.substr(-3) == '.js') {
//       try {
//          route = require('./api/' + file)(app, _, db);
//       }
//       catch(e){ console.log(e); }
//   }
// });

app.post('/addItems', function(req,res, next) {
  var body = _.pick(req.body, 'name', 'price', 'sizeCount', 'provenance', 'category');

  Items.findOne({name: body.name}, function(err, items) {
    if(err){ 
      return next(err);
    } else if (items) {
      res.send({ message: body.name + ' is already in the database'});
    } else {
      var item = new Items({
        name: body.name,
        price: body.price,
        sizeCount: body.sizeCount,
        provenance: body.provenance,
        category: body.category
      });

      item.save(function(err) {
        if(err) return next(err);
        res.send({ message: body.name + ' has been added successfully!'});
      });
    }
  });
});

app.get('/items', function(req,res, next) {
  Items.find(function(err,item) {
    if(err) return next(err);
    
    res.send(item);
  });
});

app.post('/updateItems', function(req,res, next) {
  var body = _.pick(req.body, 'id', 'name', 'price', 'sizeCount');

  Items.findOneAndUpdate({_id: body.id}, {name: body.name, price: body.price, sizeCount: body.sizeCount}, function(err, item) {
    if(err) return next(err);

    res.send({message: body.name + ' has been updated successfully!'});
  });
});

app.use(function(req, res) {
  Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
      var page = swig.renderFile('views/index.html', { html: html });
      res.status(200).send(page);
    } else {
      res.status(404).send('Page Not Found');
    }
  });
});

var server = require('http').createServer(app);
var io = require('socket.io')(server);

server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});