const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");



const app = express();

app.use(express.static('public'));

const redirects = require('.redirect.js');


app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

// Middleware for session management
app.use(session({
    secret: 'th3$s3cr3tK3y', 
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true } // Set to true if using HTTPS
}));

//app.use('/events', eventsRoute);
app.use('/redirect', cookieJwtAuth, redirects);

//connect through connection string + specify desired db
mongoose.connect('mongodb://localhost:27017/Events')

cookieJwtAuth = (req, res, next) => {
    const token = req.cookies.token;
    try {
      const user = jwt.verify(token, process.env.MY_SECRET);
      req.user = user;
      next();
    } catch (err) {
      res.clearCookie("token");
      return res.redirect("/");
    }
  };
module.exports = app;