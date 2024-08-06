'use strict';

//=========> Debug Javascript In Chrome <==========

// Debug No: 1.
// let firstName = '20'; //Number('20') ----> a vabeo likhle hobe.
// let lastName = '20'; //Number('20') ----> a vabeo likhle hobe.

// let finalResult = Number(firstName) + Number( lastName);
// alert(finalResult);
// console.log (typeof(finalResult))


// Debug No: 2.
// let amount = Number(prompt("Enter Your amount : ", ""));
// console.log(amount + 100);


// Debug No: 3.
function sum(numOne, numTwo) {
  let result = Number(numOne) + Number(numTwo);
  showMessage (result)
}

function showMessage(txt) {
  alert(txt);
}

let firstName = prompt ("Enter Your Number: ", " ");
let lastName = prompt('Enter Another Number: ', ' ');

sum(firstName, lastName);





//======== Debuging tools ar kaj ============

//Deactive breakpoint -->  somosto breakpoint gulakea deactive korea dibe.

//Resume----> javascript resume korbe ba javascript tar nijer moto kaj korbe.

//step ----> step by step kaj gula kore kore dakhabe. function call hole oi function gular moddhea dhukbea & dariea jabe.

//step over ----> jode amar mone hoi function ar moddhea dhukbo na just exciute hoie jak.


// step into ----> step into step ar motoi ak akta function ar moddhea dhukbe sudhumatro asynronunce function ar khatre kaj korbe.

//step out ----> vulboshoto kono function ar mmoddhea jode dhuke jai tahole sakhanthake ber hobar jonno ata baboher hora hoi