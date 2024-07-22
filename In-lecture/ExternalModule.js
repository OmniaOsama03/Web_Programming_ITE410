//To access the methods in the Calc class. 
let calcModule = require('./calc.js');

//Now, call the methods using the variables.

result = calcModule.add(3, 5);
console.log(result);

result = calcModule.multiply(3, 5);
console.log(result);

/*
Write 2 js classes where one calculates the price of an Iphone 14 and Samsung S24

For Iphone: 4600 * quantity + 5% vat;
For Samsung: 4000 * quantity + 5% vat;

(written in the calc2 class)
*/

//let priceCalculation = require('./calc2.js');
let fs = require('fs'); //Including the fs module

//If we wanna read from the calc2 file: (Parameters: file name, file type, function if there's error)
fs.readFile('calc2.js', 'utf8', function(err, data)
{
    if (err) {
        console.log("Error reading file:", err);
    } else {
        console.log("File content:", data);
    }
});

//Now, in the terminal, write node readFile.js
//To write into the file: 
fs.writeFile('calc2.js', 'console.log("Hello!")', function(err) {
    if (err) {
        console.log('Error saving data:', err);
    } else {
        console.log('Data is saved successfully.');
    }
}); 

//To append to a file, use fr.appendFile
//To delete a file: 
fs.unlink('calc2.js', function()
{
    console.log("File has been deleted");
})


let phone = "SamsungS24";
let quantity = 5;

//console.log("THE PRICE OF THE PURCHASE IS: " + priceCalculation.calculatePrice(phone, quantity));
//^P.S, it works but it's gone after the above functions. (the calc2 class is ba7 now.)