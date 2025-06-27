const prompt = require('prompt-sync')();

let a = prompt("What is the official name of JavaScript? ");

if (a == "ECMAScript") {
    console.log("Right") 
}  else {
    console.log("The official name of JavaScript is ECMAScript")
}