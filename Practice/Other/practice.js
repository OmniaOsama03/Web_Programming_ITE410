//3 ways to create an array in js
var array1 = [];
var array2 = new Array();
var array3 = new Array(1, 2, 4);
var multidimensional = [2][3];
array1.push(1);
console.log(array1);

console.log(array3.join());

console.log(array2.pop(2))

//_____________________________________

var me =
{
    name : "Omnia",
    age : 20, 
    major : "Software Engineering",
    isAwesome : true,
    greet : function()
    {
        console.log(`Hi! My name is ${this.name}, and I'm ${this.age} years old!`);
    }
}

me.greet();

let anonymous = ()=>
{
    console.log("Anonymous")
}

anonymous();

var myArray4 = [()=>{console.log("I'm a function stored in an array! This is perfectly fine in JS!")}];

myArray4[0]()

//__________________________________________________________________________________

let [a, b, c, ... d] = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(a, b, c, d)

let map = new Map();

map.set(2, 3);

console.log(map.get(3)); // a key that isn't stored

//_________________________________________________________________________________

function Student(name, major)
{
    this.name = name;
    this.major = major;
}

var Omnia = new Student("Omnia",  "Software Engineering");

for(let key in Omnia)
{
    console.log(`Info on this student: ${Omnia[key]}`);
}
console.log(Omnia.id?.length); //checking if the id field exists before attempting to do smth with it
