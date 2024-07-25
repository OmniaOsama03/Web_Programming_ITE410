//creating and storing endpoints for the orders

const express = require('express');
const router = express.Router();

//Defining the orders endpoints
//1. POST
router.post('/', (req, res, next) =>
    {
        // Parsing the request and creating the object
    const order = {
        orderId: req.body.orderId,
        ItemCount: req.body.ItemCount,
        TotalBill : req.body.TotalBill
    }; // Now, it can be saved in the database

        res.status(200).json(
            {
                message : "Handling a post request for /orders",
                order : order
            }
        )
    })

router.post('/:orderid', (req, res, next) =>
{
    const id = req.params.orderid;
    if(id == 20)
    {
        res.status(200).json(
            {
                message: "Order has been created!",
                id : id
            }
        )
    }
})

//2. GET
router.get('/', (req, res, next) =>
    {
        res.status(200).json(
            {
                message : "Handling a get request for /orders!"
            }
        )
    })


router.get('/:orderID', (req, res, next) =>
    {
        const id = req.params.orderID;

        res.status(200).json(
            {
                message : "Order detals",
                id : id
            })
    })


//3. DELETE
router.delete('/:orderID', (req, res, next) =>
    {
        const id = req.params.orderID;
        res.status(200).json(
            {
                message : "Order details with this id deleted!",
                id : id
            })
    })


//Allowing the file to be imported elsewhere
module.exports = router;