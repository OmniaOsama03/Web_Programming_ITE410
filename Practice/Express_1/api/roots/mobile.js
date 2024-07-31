let express = require('express');
let router = express.Router();

let mobiles = require('./mobile.json');

router.post('/', (req, res, next) =>
{
    res.status(200).json(
        {
            message : "DEFAULT"
        }
    )
})

router.post('/new', (req, res, next) =>
{
    let mobile =
    {
        id : req.body.id,
        name : req.body.name,
        brand : req.body.brand,
        price : req.body.price,
        availabilityStatus : req.body.availabilityStatus
    }

    mobiles.push(mobile);

    res.status(200).json(
        {
            message : "mobile successfully added", 
            mobile : mobile
        }
    )
})

module.exports = router;