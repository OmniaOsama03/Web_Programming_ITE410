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
console.log("The engineer's name: " + Engineer['name'])
