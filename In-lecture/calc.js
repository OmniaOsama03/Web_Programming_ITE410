//To allow the method to be exported namely, we have 3 ways:

//First:
exports.add = add; 

//Second: 
module.exports.add = add;

//Third (while defining the function):

exports.multiply = function(a, b)
{
    return a *b;
}

function add(a, b)
{
    return a + b;
}

function subtract(a, b)
{
    return a - b;
}