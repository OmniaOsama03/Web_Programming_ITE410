//Here, we define how the data is modeled - defining the entity
//from mongo, get the schema, and create a new schema (mention the fields that'll be there)
//timestamp : true is used for the audit field (last updated, created, and such..). Benifit: Security, rollback

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const employeeSchema = new schema(
{
    name : {type : String},
    designation : {type : String},
    email : {type : String},
    phone: {type: String},
    age: {type: Number}

},{timestamp:true});

// Create and export the Employee model
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;

