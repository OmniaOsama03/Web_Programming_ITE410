//Here, we'll create and store all the endpoints.

//Import express and create the router that'll route the endpoints
const express = require('express');
const router = express.Router();

//Beginning with the endpoints
//1. POST
router.post('/', (req, res, next) => {
    // Parsing the request and creating the object
    const product = {
        name: req.body.name,
        price: req.body.price
    }; // Now, it can be saved in the database

    res.status(200).json({
        message: 'Handling a post request for /products',
        createdProduct: product
    });
});

//2. GET
router.get('/', (req, res, next) =>
    {
        
        res.status(200).json(
            {
                message : "Handling a get request for /products!"
            }
        )
    })

router.get('/:productID', (req, res, next) =>
    {
        const id = req.params.productID;

        if(id == 'special')
        {
        res.status(200).json(
            {
                message : "You have discovered the special id! Woohoo! Prize: nooo!",
                id : id
            })
        }else
        {
            res.status(200).json(
                {
                    message : "You have passed an id!"
                }
            )
        }
   
    })

//3. PATCH
router.patch('/:productID', (req, res, next) =>
    {
        const id = req.params.productID;

        if(id == 'special')
        {
        res.status(200).json(
            {
                message : "You have discovered the special id",
                id : id
            }
        )
        }
    })


//4. DELETE
router.delete('/:productID', (req, res, next) =>
    {
        const id = req.params.productID;

        if(id == 'special')
        {
        res.status(200).json(
            {
                message : "Done! The ID has been deleted!",
                id : id
            })
        }else
        {
            res.status(200).json(
                {
                    message : "Oopsie! The ID you entered has not been found!"
                }
            )
        }
   
    })

//Allowing the file to be imported elsewhere
module.exports = router;
