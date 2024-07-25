const express = require('express');
const nodeman = require('nodemon');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mobileRoute = require('./api/roots/mobile');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/mobile', mobileRoute);


module.exports = app;