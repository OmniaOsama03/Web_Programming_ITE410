const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mobileRouter = require('./api/roots/mobile');

const app = express();

// Use morgan for logging
app.use(morgan('dev'));

// Use body-parser middleware to parse JSON and URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Define the mobile router route
app.use('/mobile', mobileRouter);

module.exports = app;





