const express = require('express');
const router = express.Router();
const mobiles = require('./mobiles.json'); //To access all the mobile objects.


//GET - To list all mobile objects
router.get('/', (req, res, next) =>
{
    res.status(200).json(mobiles);
})
module.exports = router;

//POST - Updates the status of a mobile based on id (if availability is false)
router.post('/issue/:id', (req, res, next) => {
    const id = req.params.id;
    
    // Find the mobile object with the given id
    const mobile = mobiles.filter(m => m.id == id);
    
    // Check if the mobile exists and its availabilityStatus is false
    if (mobile && !mobile.availabilityStatus) 
    {
        mobile.availabilityStatus = true; 

        res.status(200).json(
        {
            message: `Mobile with id ${id} has been issued and is now available.`,
            updatedMobile: mobile
        });

    } else if (mobile && mobile.availabilityStatus) 
    {
        res.status(400).json({
            message: `Mobile with id ${id} is already available.`
        });
    
    } else 
    {
        res.status(404).json({
            message: `Mobile with id ${id} not found.`
        });
    }
});

//POST - Update status of a mobile based on id (if availability is true)
router.post('/return/:id', (req, res, next) => {
    const id = req.params.id;
    
    // Find the mobile object with the given id
    const mobile = mobiles.filter(m => m.id == id);
    
    // Check if the mobile exists and its availabilityStatus is true
    if (mobile && mobile.availabilityStatus) 
    {
        mobile.availabilityStatus = false; 

        res.status(200).json(
        {
            message: `Mobile with id ${id} has been returned and is now unavailable.`,
            updatedMobile: mobile
        });

    } else if (mobile && !mobile.availabilityStatus) 
    {
        res.status(400).json({
            message: `Mobile with id ${id} is unavailable.`
        });
    
    } else 
    {
        res.status(404).json({
            message: `Mobile with id ${id} not found.`
        });
    }
});

//GET - Return a specific mobile object based on id
router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    
    // Find the mobile object with the given id
    const mobile = mobiles.filter(m => m.id == id);
    
    // Check if the mobile exists 
    if (!mobile) 
    {
        res.status(404).json(
        {
            message: `Mobile with id ${id} does not exist.`
            
        });

    } else 
    {
        res.status(200).json({
            mobile : mobile
        });
    }
});
