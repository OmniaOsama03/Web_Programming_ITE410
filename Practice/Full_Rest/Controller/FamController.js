var family = require('../Model/family');

var showAll = (req, res, next) =>
{
    family.find().then((allMembers) =>
    {
        res.status(200).json(allMembers);

    }).catch( (error) =>
    {
        console.log("Error fetching all members");
    })
}

var specificAge = (req, res, next) =>
{
    var age = req.body.age;

    family.find({age : age}).then((member) =>
    {
        res.status(200).json(member);

    }).catch( (error) =>
    {
        console.log("Error fetching specific member");
    })
}

var updateById = (req, res, next) =>
{
    var id = req.body.id;

    var updatedInfo = 
    {
        name : req.body.name,
        age : req.body.age,
        awesome : req.body.awesome
    }

    family.findByIdAndUpdate(id, {$set : updatedInfo}).then(() =>
    {
        res.status(200).json({ message : "Successfully updated info"});

    }).catch( (error) =>
    {
        console.log("Error updating member info.");
    })
}

var createNew = (req, res, next) =>
{
    var newMember = new family(
    {
        name : req.body.name,
        age : req.body.age,
        awesome : req.body.awesome
    })

    newMember.save().then(() =>
        {
            res.status(200).json({ message : "Successfully added user."});

        }
    )
}

module.exports = {showAll, specificAge, updateById, createNew};
