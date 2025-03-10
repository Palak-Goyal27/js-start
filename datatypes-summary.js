// Primitive 

// 7 types :  String, Number , Boolean , null , undefined , Symbol, BigInt

// string -> is a call by value that means if we do any changes that is performe on copy not on a actually value
// null -> means total blank .
// null ka datatype bhi object he hota hai


const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

//console.log(id === anotherId); // false

const bigNumber = 123456789n;

// console.log(typeof bigNumber);   // bigint
 
// console.log(typeof outsideTemp); // object 

// console.log(typeof scoreValue); // number 

// console.log(typeof anotherId);  // symbol  - symbol ka datatype symbol he hota hai

// console.log(typeof undefined); // undefined - undefined ka datatype is a undefined .

// Reference (non primitive)

//Array, Objects, Functions

const heros = ["palak","nidhi","prachi"];

//console.log(typeof heros); // object - array datatype is also object.

let myObj =
{
    name: "Hitesh",
    age: 22,
}

//console.log(typeof myObj); // object datatype is object.

const myFunction = function()
{
    console.log("hello world");
}
  
//console.log(typeof myFunction); // function - function ka datatype function he hota hai






//******************************** */

// Stack(primitive)- copy value , heap ( non- primitive)- original reference of value

let palak = "goyal"

let anothername = palak

anothername = "shelly"

console.log(palak);        // these value is store in stack
console.log(anothername);

let userOne ={            // these value is store in heap 
    name:"palak",
    age:23
}

let userTwo = userOne;
userTwo.name = "shelly"

console.log(userOne);         // because of heap .actually value is change
console.log(userTwo);
