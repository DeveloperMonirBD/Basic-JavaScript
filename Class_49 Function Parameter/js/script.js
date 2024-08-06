"use strict"; 

//==================> 49 Function Parameter <=====================

// parametter holo function toire korar somai apni () ar moddhea kotogula variable dieasen sagulakea bolea function parametter.
function printName (firstName, lastName) {
  console.log(firstName + " " + lastName);
}


printName("Monirul", "Islam"); // function ta call korar somai apne ai ja valu gula pass korsen ai valugulakei bolea function argument ba argument.

printName("Raj", "Majumder");




// Example:-

// function sum( firstName, lastName) {
//   console.log (firstName + " " + lastName);
// }
// sum( Monirul, Islam);
// sum( rakibul, Islam);


// function sum(firstNum, lastNum) {
//   console.log (firstNum + " " + lastNum); 
// }
// let firstNum = +prompt("Enter Your First Num: ");
// let lastNum = +prompt("Enter Your Last Num: ");

// sum(firstNum, lastNum);



function sum(firstNum, lastNum) {
  console.log(firstNum + lastNum);
}

let firstNum = +prompt("Enter First Number: ");
let lastNum = +prompt("Enter Last Number: ");

sum(firstNum , lastNum);