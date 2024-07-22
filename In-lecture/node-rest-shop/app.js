
const express = require('express');
const app = express();

//So if someone called /products, it'd go there immidiatly
const  productsRoute = require('./api/roots/products');

/*app.use((req, res, next) => {
    res.status(200).json({
        "message": "It works!"
    });
});*/

app.use('/products', productsRoute);

module.exports = app;