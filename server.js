var bodyParser 	= require('body-parser');
var express 	= require('express');
var app 		= express();
var mongoose   	= require('mongoose');
var routes 		= require('./routes');

//TODO: change to own db
mongoose.connect('mongodb://localhost:27017/crystal-database'); // connect to our database

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

app.use('/api', routes);

app.listen(port);
console.log('Magic happens on port ' + port);