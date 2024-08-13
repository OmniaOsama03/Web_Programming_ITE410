var mongoose = require('mongoose');

var schema = mongoose.Schema;

var familySchema = new schema(
    {
        name : {type : String},
        age  : {type : Number}, 
        awesome : {type : Boolean}
    }
);

var family = mongoose.model("myfam", familySchema);

module.exports = family;