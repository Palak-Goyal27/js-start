//console.log("hello");
const name = "Palak";
const age = 22;

//console.log(name+age+"mewar"); // this is old version

// new version is

//console.log(`hello my name is ${name} and my age is ${age}`);

const Fname = new String("Palak Goyal");

// console.log(Fname[3]);  // this is  a array index by which you find the value of index.
// console.log(Fname.__proto__); // this help u to find the prototype

// console.log(Fname.length);  // length of string
// console.log(Fname.toUpperCase());  //convert them in uppar case
// console.log(Fname.charAt(6));  //find the character at that no.
// console.log(Fname.indexOf('o'));  // find the index of that character


// const newstring = Fname.substring(0,5);  // kaha se kaha tak ki value print karani hai vo no. input karne hai
// console.log(newstring);

// const Newstring = Fname.slice(-10 , 3);  // yaha hum -ve value bhi de sakte hai
// console.log(Newstring);

 const Newstring="        Nidhi Mishra         ";
console.log(Newstring);
console.log(Newstring.trim());  // remove whitespace means  blank or space
//console.log(Newstring).trimStart();
//console.log(Newstring).trimEnd();

const url = "https://palak.com/hibit"

console.log(url.replace('hi','--'));  // replace the string
console.log(url.includes('hi'));  // find the string or any value in your string.

console.log(Fname.split(' ')); //  split the value that based on space. or we can easily split any string by using split function 
