// three types of variables const , var, and let .
// hum var ko use nhi karte.
const accountId = 12345 
let accountEmail ="hitesh@gmail.com"
var accountPassword = "12345678"
accountCity = "UP" // we can also declare variable like this.
let accountState; // its value is undefine.

//accountId = 2 // not allowed because const keyword is used to fix the value then we can't change that value.

accountEmail = "palak@gmail.com"
accountPassword = "123"
accountCity ="dadri"
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

// if we write this and it take so much time so we can use different method
/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);


