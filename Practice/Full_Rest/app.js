var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var familyRoute = require('./Route/FamilyRoute');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(morgan('dev'));
app.use('/', familyRoute);

mongoose.connect('mongodb://localhost:27017/Family', {useNewUrlParser:true, useUnifiedTopology:true});
var db = mongoose.connection;

db.on('error', (error) => {console.log(error)});
db.once('open', () => {console.log("Successfully connected!")});

module.exports = app;