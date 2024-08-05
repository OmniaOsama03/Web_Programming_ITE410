const response  = require('express');

//get the model
const employee = require('../models/employeeModel');

//method to display list of employees
const index = (req, res, next)=>
{
    employee.find().then(response =>
    {
        res.status(200).json(response);

    }).catch(err =>
    {
        res.status(200).json({message : "Error occured fetching the employee list."});
    })
}

//to save a new employee
const store = (req, res, next) =>
{
    let employee = new Employee(
    {
        name : req.body.name,
        designation: req.body.designation,
        email : req.body.email,
        phone : req.body.phone,
        age : req.body.age
    });

    employee.save().then(response =>
    {
        res.status(200).json({message : "Employee added successfully."});

    }).catch(error =>
    {
        res.json({message : "error occured during data update for employee."})
    })
}

//updating some fields, but only what was provided by the user.
const update = (req, res, next) => {
    const employeeId = req.body.employeeId;

    // Create update data object from request body
    const updateData = {
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    };

    // Find and update employee by ID
    Employee.findByIdAndUpdate(employeeId, { $set: updateData })
        .then(() => {
            res.status(200).json({
                message: 'Employee updated successfully'
            });
        })
        .catch(error => {
            res.status(500).json({
                message: 'Error updating employee',
                error: error.message 
            });
        });
};


//For delete, we don't need the whole body, just the id
const deleteEmployee = (req, res, next)=>
{
    let employeeid = req.body.employeeid;

    Employee.findByIdAndRemove(employeeid).then(()=>
    {
        res.json({message: "Employee deleted successfully."});

    }).catch(error =>
    {
        res.json({message : "An error occured while deleting employee."})
    })
}

module.exports = {index, show, store, update, deleteEmployee}
