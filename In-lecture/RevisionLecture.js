//Arithmetic operators: +, -, *, /, 
let num1 = 4;
let num2 = 2;

let resultAdd = num1 + num2;
console.log("Addition: " + resultAdd); //concatenation

//__________________________________________________
//To check if a number is odd or even:
let testNum = 5;

if(testNum %2 == 0)
{
    console.log(testNum + " is an even number");
}
else
{
    console.log(testNum + " is an odd number");
}

//__________________________________________________
//Adding 2 boolean variables:
let bool1 = true;
let bool2 = false;

resultAdd = bool1 + bool2; //Remember that true = 1, false = 0
console.log("Addition of 2 booleans (true & false): " + resultAdd);

bool2 = true;

resultAdd = bool1 + bool2;
console.log("Addition of 2 booleans (true & true): " + resultAdd); //automatically gets converted into the Number type.

//__________________________________________________
//a truthy value:
if(resultAdd) 
{
    console.log("Hello! " + resultAdd + " is a truthy value! Any number except 0 is a truthy value, actually!");
}

//checking if +ve integers are truthy
if (1) 
{
    console.log('1 is truthy');
} 

//checking if -ve integers are truthy
  if (-1) 
{
    console.log('-1 is truthy');
}
  
//checking if 0 is truthy
if (0) 
{
    console.log('0 is truthy');
} else
{
    console.log('0 is falsy');
}

//checking if null is truthy
if (null) 
{
    console.log('null is truthy');
} else
{
    console.log('null is falsy');
}

//checking if undefined is truthy
if (undefined) 
{
    console.log('undefined is truthy');
} else
{
    console.log('undefined is falsy');
}

//__________________________________________________
//pre and post increment
let x = 4;
let y = x++; //Value of x will be assigned to y THEN x it'll be incremented.

console.log("Result of y = x++ : x is " + x  + " and y is " + y);

x = 4;
y = ++x;

console.log("Result of y = ++x : x is " + x  + " and y is " + y)

//__________________________________________________
//Just like java, JS has a Math class with static methods
console.log("5^5: " + Math.pow(x, y));
//__________________________________________________

//Logical Operations (==, >, <. <=, >=)
let s1 = "hello!";
let s2 = "Hello!";
let resultEqual = s1 == s2; //Mind the case sensitivity 
console.log("Are s1 and s2 equal? " + resultEqual);

s1 = "apple";
s2 = "banana";
resultEqual = s1 > s2; 
console.log("is 'apple' greater than 'banana' ? " + resultEqual);

s1 = "book";
s2 = "book1";
resultEqual = s1 > s2; 
console.log("is 'book' greater than 'book1' ? " + resultEqual);

s1 = "3";
s2 = 2;
resultEqual = s1 > s2; 
console.log("is '3' greater than 2 ? " + resultEqual); // The string "3" will be parsed for comparison.
console.log("Type of s1 after the comparison: " + typeof s1); //Bc parsed ONLY for comparison.

s2 = 3;
//__________________________________________________
//Comparison using ==
if(s1 == s2)
{
    console.log("Using ==, '3' and 3 are equal.")
}else
{
    console.log("Using ==, '3' and 3 are NOT equal.")
}

//Comparison using ===
if(s1 === s2)
{
    console.log("Using ===, '3' and 3 are equal.")
}else
{
    console.log("Using ===, '3' and 3 are NOT equal.")
}

let x1 = ''
let y1 = false

//Comparison using ==
if(x1 == y1)
{
    console.log("Using ==, '' and false are equal.")
}else
{
    console.log("Using ==, '' and false are NOT equal.")
}
  
//Comparison using ===
if(s1 === s2)
{
    console.log("Using ===, '' and false are equal.")
}else
{
    console.log("Using ===, '' and false are NOT equal.")
}

//__________________________________________________
//Put order automatically if sale greater than 30% and delivery time less than or equal 2 days
let iphoneType = "iphone 14";
let salePercentage = 35;
let deliveryDays = 2;

if(iphoneType == "iphone 14" && salePercentage > 30 && deliveryDays <= 2)
{
    console.log("Your iphone 14 delivery has automatically been placed!");
}
else
{
    console.log("Your delivery has NOT been placed due to not meeting criteria.");
}

//__________________________________________________
//Explicit and Implicit conversion/ Type casting 
let conversion1 = String(6); //Explicit

let conversion2 = 4;
console.log(typeof conversion2);

conversion2 += ''; //Explicit conversion to string.
console.log(typeof conversion2);

conversion2 -= 2; //Implicit conversion to Number
console.log(typeof conversion2);

let conversion3 = Boolean(6); //Explicit conversion
console.log(conversion3, typeof conversion3)

if(6) //Implicit conversion. Number -> Boolean
    console.log("Hello!");

//__________________________________________________
//Print numbers divisible by 3, less than 100
for(let i = 1; i < 100; i++)
{
    if(i %3 == 0)
        {
            console.log(i + " is divisible by 3 and is less than 100.")
        }
}
 

//__________________________________________________
//Print each character of  4566682
let number = 4566682;
let numberStr = number.toString();

for (let i = 0; i < numberStr.length; i++) 
{
  console.log(numberStr[i]);
}

//An alternative to the one above:
let x2 = 4566682;

while(x2 != 0)
{
    console.log( x2 % 10);
    x2 = Math.floor(x2 /10);  //or x2 = parseInt(num/10)
}


//__________________________________________________

function greetAll()
{
    console.log("Hello World!");
}

greetAll(); //Invoking the function

function greetSpecificUser(user) {
    return `Hello ${user}`;
  }

let user = "Omnia";
console.log(greetSpecificUser(user));

//Anonymous method:
let add = function(num1, num2)
{
    return num1 + num2;
}

console.log(add); //see what it'd return if you have an anonymous functon and if you don't.

let sum = add(4, 5);
console.log(sum);

//Default values:
console.log(add(num1 = 4, num2)) //num2 will get the default value of '2'

//__________________________________________________
//Objects

let Engineer = {} //Creates an empty object

Engineer =
{
    id : "1234", 
    name: "Omnia",
    age: 20,
    major: "Software Engineering"

}//Notice the key-pair values. Now, you can find values using the keys

console.log("Printing all info of my newly created object :");
console.log(Engineer)

console.log("Printing specific info of my newly created object :");
console.log("The engineer's name: " + Engineer.name)

//An alternative
console.log("Printing specific info of my newly created object :");
console.log("The engineer's name: " + Engineer['name']);


//_________________________________________________________

let hello = ()=>
{
    console.log("Hello there! This is an arrow function!");
    return 1;
}

console.log(hello());


//______________________Arrays___________________________

let myArray = new Array();
//^To create an array in JS, you create an array object.

let myArray1 = [];
//^This is another way to create an array, which creates an object immediately. 

//3 ways to add values into an array: Using push(), by specifying the index, by defining the values when you first create.
myArray.push('first')
myArray.push('second')
myArray.push('third')

myArray[3] = 'fourth';
myArray[4] = 'fifth';

let myArray2 = ['first', 'second', 'third'];

//To print the values: 
for( i = 0; i <= myArray.length; i++)
{
    console.log(myArray[i]);
}
//^ PS. unlike Java, you won't end up with an indexOutofBound exception, it'd print 'undefined'. 

let myArray3 = [1, 2.5, 'hi there', function(){console.log('Printing from a function in a mixed-type array!');}, [1, 2, 3], {type: 'object'}];
for( i = 0; i < myArray3.length; i++)
{
    console.log(myArray3[i]);
}

//To call the function in our mixed-type array:
myArray3[3]();

//To print the values in the array in mixed array as well:
for( i = 0; i < myArray3.length; i++)
    {
        if(i == 4)
        {
            for(ii = 0; ii < myArray3[4].length; ii++)
            {
                console.log(myArray3[i][ii]);
            }    
        }else
        {
        console.log(myArray3[i]);
        }
    }

//_______________________________________________________
console.log('CALLING THE PUSH METHOD: ' + myArray.push()); //Size of array
console.log('CALLING THE POP METHOD WITH A PARAMETER: ' + myArray.pop(0)); 
console.log('CALLING THE POP METHOD WITHOUT  A PARAMETER: ' + myArray.pop()); 

//________________Splice___________________________________
let spliceExample = [1, 2, 3, 4, 5, 6];

console.log('MY ARRAY BEFORE SPLICING: ' + spliceExample);
console.log('SPLICE(3) OUTPUT: ' + spliceExample.splice(3)); //Anything after 3rd index to be removed
console.log('MY ARRAY AFTER SPLICING: ' + spliceExample);

spliceExample = [1, 2, 3, 4, 5, 6];
console.log(spliceExample.splice(4, 1, 6)) 
console.log(spliceExample)
//^Explanation: array.splice(start, deleteCount, item1, item2, ...)

//____________________________________________________________
let bigArray = []
bigArray[0] = 5;
bigArray[99] = 9
console.log(bigArray) //notice the output


//__________________Destructuring of an array_________________
//Say in this example, we wanna assign 'a' to element 1 in my array, and 'b' to element 2, and so on...
let array1 = [1, 2, 3, 4]
let [a, b, , c] = array1 //If I don't wanna have 3 assigned to anything
console.log(a)

//________________________________________________________________
//Write a program to swipe 2 numbers without using a third variable
let number1 = 5;
let number2 = 10;


number1 = number1 + number2; //now, number1 = 15
number2 = number1 - number2; //now, number2 = 5
number1 = number1 - number2; //now, number2 = 10

console.log(`After swap (method 1): first = ${number1}, second = ${number2}`);

//Another way:

[number1, number2] = [number1, number2]
console.log(`After swap (method 2): first = ${number1}, second = ${number2}`);

//___________________________________________________
let string1 = 'My name is Omnia Osama Ahmed.';
let splitString = string1.split(' ');

console.log(splitString);

//If I want 'Omnia Osama Ahmed' to be in an kept alone:
let [a1, a2, a3, ... a4] = splitString
console.log(a4)

// PS. Alongside traditional for loops, you can loop through elements using a for-each loop
splitString.forEach( n =>
    console.log(n)
)

splitString.forEach( (n, i, splitString) => 
    console.log(n, i, splitString) 
)

/*
^Explanation:
 In JavaScript, when you use the forEach method on an array, the callback function you
 provide has access to three parameters: the current element (n), the index of the 
 current element (i), and the array itself (splitString). These parameters are 
 automatically provided by the forEach method when it iterates over each element of 
 the array.
*/

//__________________________________________________________________________
//Write a program that prints only the integer numbers in the array using a for-each loop

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 
nums.forEach( n=>{
    if(n %2 == 0)
    {
        console.log(n);
    }
})


//__________________________________________________________________________
//Filtering an array based on a condition
nums.filter( n => n%2 ==0); //Filters even numbers (sublist)

//Filtering numbers > 3 and are even.
nums.filter( n => n > 3 && n %2 == 0).forEach(n => console.log(n));

//___________________________________________________________________________
//Mapping each even element to its corresponding number*2 (will print all even numbers*2)
nums.filter(n => n %2 == 0).map(n => n * 2).forEach(n => console.log(n));


//____________________________________________________________________________
//Write a program that'll take an array of items, check if an element's length is greater than 5, multiply the length by 2. Use map & filter

let items = ['apple', 'samsung', 'Nokia', 'Vivo', 'Lenovo', 'OPPO'];

items.filter(n => n.length > 5).map(n => n.length*2).forEach(n => console.log(n));

//Write a program that'll check for even elements greater than 10.

let list = [2, 4, 7, 99, 88, 12, 33] 
list.filter(n => n %2 == 0 && n > 10).forEach(n => console.log(n));

//_____________________reduce_________________________________________________

let newList = [2, 4, 5, 6, 8]
console.log(newList.filter(n => n%2 == 0).map(n => n*2).reduce((a, b) => a * b)); //multiplying what we end up with

//Write a program that'll check if an item's length > 5, then concatenate x, then at the end, concatenate all the items

items = ['apple', 'samsung', 'Nokia', 'Vivo', 'Lenovo', 'OPPO'];

console.log(items.filter( n => n.length > 5).map(n => n += 'X').reduce((a, b) => a += b))

//_______________________________Recursion_____________________________
//Write a function that'll calculate the factorial of a number

function factorial(n) {
    if (n < 0) {
        return "Factorial is not possible for negative numbers";
    }
    
    if (n === 0) { //P.S You can also check for 1
        return 1;
    }

    return n * factorial(n - 1);
}

let example = 5;
console.log(`Factorial of ${example} is: ${factorial(example)}`);

//__________________________Maps___________________________________

let map = new Map(); //Creating a map object

//Adding key-value pairs to the map:
map.set(101, 'Omnia');
map.set(102, 'Sara');
map.set(103, 'Aala');
map.set(104, 'Nour');

//Fetching a specific value:
map.get(101); 

//Iterating through the map:
console.log("---ALL VALUES IN MY MAP---");
for(let [k, v] of map)
    console.log("THE KEY: " + k + "| VALUE: " + v);

//map.forEach( (k, v) => ...) //Recall that what's inside is an anonymous function

//___________________________________________________________________
/*Write a program that contains a map called 'employeeNames' that stores the employee ID and name
and prints all names in which the ID is greater than 101. */

let employeeNames = new Map();

employeeNames.set(100, 'Omnia');
employeeNames.set(101, 'Sara');
employeeNames.set(102, 'Aala');
employeeNames.set(103, 'Nour');
employeeNames.set(104, 'Sabrina');


for(let [k, v] of employeeNames)
{
    if( k > 101)
        console.log("EMPLOYEE NAME: " + v);
}

//An alternative (since there are 2 ways of iterating through a map)
employeeNames.forEach( (v, k) => {if(k > 101) {console.log("EMPLOYEE NAME: " + v)}});
//^ Keep in mind that here, k, v are swapped.

//_______________________________________________________________________
//Write a program that stores an array of numbers, then counts the number of repeating numbers and adds them.

let numbers = [1, 2, 3, 4, 5, 1, 5];
let repeatedNumbers = new Map();
let result = 0;

for(let i = 0; i < numbers.length; i++)
{
    if(!repeatedNumbers.has(numbers[i])) //Number isn't in Map
    {
        repeatedNumbers.set(numbers[i], 1); //Key: the number, value: # times repeated
    }else 
    {
        repeatedNumbers.set(numbers[i], repeatedNumbers.get(numbers[i]) + 1);
    }

}

for(let [k, v] of repeatedNumbers)
{
    if(v > 1)
        result += k*v;
}

console.log(repeatedNumbers);
console.log("SUM: " + result);

//____________________________Sets_________________________________________

let mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1);
mySet.add(3);
mySet.add(3);

console.log('Values in my set: '); //Notice that there are no duplicates.
for(let x of mySet)
{
    console.log(x);
}

//__________________________Objects________________________________________

let student1 = {};
student1 = 
{
    id: 'xxxxxxx',
    firstName: 'Omnia',
    lastName: 'Ahmed', 
    age: 20,
    major: 'Software Engineering'
}

//2 ways of fetching a specific value
student1.firstName;
student1['firstName'];

//Different ways of creating objects:
//1. Through a parameterized constructor

function Student(id, firstName, lastName, age, major) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.major = major;
    this.university = function() 
    {
        console.log(`${this.firstName} is a student at ADU.`);
    }
}

//So we're basically creating an constructor and defining the attributes and methods.

//________________________________________________________________________
/*Create a constructor of the laptop class which has 2 parameters; cpu and ram. It also 
has a method that informs us that the laptop is running*/

function Laptop(cpu, ram) 
{
    this.cpu = cpu;
    this.ram = ram;

    this.isRunning = function() //Anonymous function
    {
        console.log(`The laptop with ${this.cpu} CPU and ${this.ram} RAM is running.`);
    }
}

let laptop1 = new Laptop("Intel i7", "16GB");
let laptop2 = new Laptop("AMD Ryzen 5", "8GB");
let laptop3 = new Laptop("Apple M1", "32GB");

console.log('Calling the isRunning method for each of the objects in the Laptop class: ');
laptop1.isRunning();  
laptop2.isRunning();  
laptop3.isRunning();  

//___________________________Nested Objects_____________________________________

let itEngineer =
{
    name : 'Omnia', 
    technology : '35', 
    laptop : 
    {
        brand : 'Lenovo'
    }
}

console.log(itEngineer); //Will print both objects, the second within the first/
console.log(itEngineer.laptop.brand); //Go outer to inner

//To check if a value exists before calling  a method on it (like .length), we can use a question mark, like this:
//console.log(itEngineer.name?.length); //If the object didn't have a name value, .length won't be called.

//To go through every key in an object (& nested loop):
for (let key in itEngineer) {
    if (typeof itEngineer[key] !== 'object' || itEngineer[key] === null) {
        console.log(key + ": " + itEngineer[key]);
    } else {
        for (let innerKey in itEngineer[key]) {
            console.log(innerKey + ": " + itEngineer[key][innerKey]);
        }
    }
}

//___________________________________________________________________
/*Write a program that contains an object Laptop which has another Laptop object within it and a compare method
which will compare the ram of the 2 Laptops*/

let Laptop1 = 
{
    brand: 'HP',
    ram: 16,

    Laptop2: 
    {
        brand: 'Lenovo',
        ram: 32,
    },
    
    compareLaptops: function() 
    {
        if (this.ram > this.Laptop2.ram) 
        {
            console.log(`${this.brand} has more RAM (${this.ram}GB) than ${this.Laptop2.brand} (${this.Laptop2.ram}GB).`);
        } else if (this.ram < this.Laptop2.ram) 
        {
            console.log(`${this.Laptop2.brand} has more RAM (${this.Laptop2.ram}GB) than ${this.brand} (${this.ram}GB).`);
        } else 
        {
            console.log(`${this.brand} and ${this.Laptop2.brand} have the same amount of RAM (${this.ram}GB).`);
        }
    }
};

Laptop1.compareLaptops();