const response  = require('express');

//get the model
const Employee = require('../models/employeeModel');

//show the list of employees
const index=(req,res,next)=>{
    Employee.find()
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message:"an error occured during fetching the employee list"
        })
    })
}

//Show a single employee
const show=(req,res,next)=>{
    let employeeId=req.body.employeeId
    Employee.findById(employeeId)
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message:"an error occured during fetching employee record"
        })
       
    })
}

//Add an employee to database
const store=(req,res,next)=>{
    let employee= new Employee({
        name:req.body.name,
        designation:req.body.designation,
        email:req.body.email,
        phone:req.body.phone,
        age:req.body.age

    })
    employee.save()
    .then(response=>{
        res.json({
            message:"Employee added successfully"
        })
    })
    .catch(error=>{
        res.json({
            message:"error occured during adding employee record"
        })
    })

}

//Add a function to update an employee by employee id
const update=(req,res,next)=>{
    let employeeId=req.body.employeeId
    let updateData={
        name:req.body.name,
        designation:req.body.designation,
        email:req.body.email,
        phone:req.body.phone,
        age:req.body.age
    }
    Employee.findByIdAndUpdate(employeeId,{$set:updateData})
    .then(()=>{
        res.json({
            message:"employee data successfully updated"
        })
    })
    .catch(error=>{
        res.json({
            message:"error occured during data update for employee"
        })
    })
}

//delete an employee by id
const deleteEmployee=(req,res,next)=>{
    let employeeId=req.body.employeeId
    Employee.findByIdAndRemove(employeeId)
    .then(()=>{
        res.json({
            message:`employee deleted successfully with id ${employeeId}`
        })
    })  
    .catch(error=>{
        res.json({
            message:"error occured while deleting the employee record"
        })
    })
    

}

module.exports= {
    index,show,store,update,deleteEmployee
}