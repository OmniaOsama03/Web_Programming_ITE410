const express = require('express');
const router = express.Router
const EmployeeController = require('../controller/employeeController');

router.get('/', EmployeeController.index);
router.post('/show', EmployeeController.show);
router.post('/store', EmployeeController.store);
router.post('/update', EmployeeController.update);
router.delete('/delete', EmployeeController.deleteEmployee)

module.exports = router;