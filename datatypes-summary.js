// Primitive 

// 7 types :  String, Number , Boolean , null , undefined , Symbol, BigInt

// string is a call by value that means if we do any changes that is performe on copy not on a actually value
// null means total blank .
//

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); // false

const bigNumber = 123456789n;

const heros = ["palak","nidhi","prachi"];
let myObj =
{
    name: "Hitesh",
    age: 22,
}

const myFunction = function()
{
    console.log("hello world");
}
  
console.log(typeof bigNumber);   // bigint
 
console.log(typeof outsideTemp); // object 

console.log(typeof scoreValue); // number 

console.log(typeof myFunction); // function - function ka datatype function he hota hai

console.log(typeof heros); // object 

console.log(typeof anotherId);  // symbol  - symbol ka datatype symbol he hota hai



// Reference (non primitive)

//Array, Objects, Functions

