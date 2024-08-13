var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

mongoose.connect('mongodb://localhost:27017/Family');

var familySchema = mongoose.Schema(
    {
        name : String,
        age : Number,
        awesome : Boolean
    }
)

var family = mongoose.model('myfam', familySchema);

router.get('/message', (req, res, next) =>
{
    res.status(200).json({message : "Hi!"});
});

router.get('/allMembers', (req, res, next) =>
{
    family.find().then(function(members)
    {
        res.status(200).json(members);

    }).catch(function(err)
    {
        console.log(err);
    })
});

router.get('/specificAge/:age', (req, res, next) =>
{
    var age = req.params.age;

    family.find({age : age}).then(function(members)
    {
        res.status(200).json(members);

    }).catch(function(err)
    {
        console.log(err);
    })
});

router.post('/newMember', (req, res, next) =>
{
    var name = req.body.name;
    var age = req.body.age;
    var awesome = req.body.awesome;

    var member = new family({name, age, awesome})

    member.save().then(function() 
    {
        res.status(200).json("YIPPEE");

    }).catch(function(err) 
    {
        console.log(err);
        res.status(500).json({ error: "An error occurred while adding the new member" });
    });
});


module.exports = router;