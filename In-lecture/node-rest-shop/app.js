
const express = require('express');
const app = express(); //provides us with the most important method (use) that allows us to connect everything.

//Morgan for logging purposes
const morgan = require('morgan');
app.use(morgan('dev'));

//So if someone called /products, it'd go there immidiatly
const productsRoute = require('./api/roots/products');

//And if someone called /orders, it'd go there immidiatly
const ordersRoute = require('./api/roots/orders');

//For body parser
const bodyParser = require('body-parser');

//It'll parse the two following
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


/*app.use((req, res, next) => {
    res.status(200).json({
        "message": "It works!"
    });
});*/

app.use('/products', productsRoute);
app.use('/orders', ordersRoute);

module.exports = app;

//For error handling (will get manually thrown)
app.use((req, res, next) => {
    const error = new Error('The URL not found');
    error.status = 404;
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status||500)
    res.json({
        error:{message: error.message}
    })
})