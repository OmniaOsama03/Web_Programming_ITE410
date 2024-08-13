const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

//There are 2 ways to connect the database: 1. mongoose.connect('the connection string') and another.
mongoose.connect('mongodb://127.0.0.1:27017/employee',{useNewUrlParser:true, useUnifiedTopology:true})

const db = mongoose.connection

db.on('error', (err)=> console.log(err));
db.once('open', ()=> console.log("Database connected successfully"));

/*once vs on: once happens once as soon as the connection occurs, and on happens whenever an error occurs (check)*/

app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const employeeRoute = require('./routes/employeeRoots')
app.use('/api/employee', employeeRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>
{
    console.log(`Server is running on port ${PORT}`);
})