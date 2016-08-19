var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');
var fs = require('fs');
var path = require('path');
var moment = require('moment');

var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin123#@ds139645.mlab.com:39645/inventorysecondlife');

var app = express();
var PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

fs.readdirSync('./controllers').forEach(function(file) {
	if(file.substr(-3) == '.js') {
		route = require('./controllers' + file)(app, _, moment);
	}
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
	console.log('Express listening on port ' + PORT);
});