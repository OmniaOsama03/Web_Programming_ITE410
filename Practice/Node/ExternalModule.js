/*
Write a js class to calculate the price of an Iphone 14 and Samsung S24

For Iphone: 4600 * quantity;
For Samsung: 4000 * quantity;

(written in the Calc.js class)
*/


let calculate = require('./Calc.js');

let phone = "Samsung";
let quantity = 4;

console.log("PRICE OF " + quantity + " " + phone + "s: " + calculate.calculate(phone, quantity));