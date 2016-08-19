var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');
var fs = require('fs');
var path = require('path');
var moment = require('moment');
var hoganExpress = require('hogan-express');

var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin123#@ds145325.mlab.com:45325/heroku_xxl2bf43');

var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.enable('view cache');
app.engine('html', hoganExpress);

var PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());



fs.readdirSync('./controllers').forEach(function(file) {
	if(file.substr(-3) == '.js') {
		try {
			route = require('./controllers/' + file)(app, _, moment);
		}
		catch(e) {console.log(e);}
	}
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
	console.log('Express listening on port ' + PORT);
});