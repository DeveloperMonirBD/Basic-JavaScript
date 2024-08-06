'use strict';

//=========> JS ES6 Arrow Function <==========

//function Declaration
/*
function showMyName(firstName, lastName) {
  let fullName = firstName + " " + lastName;
  return fullName;
}
*/

//function Expreation
/*
let showMyName = function (firstName, lastName) {
  let fullName = firstName + " " + lastName;
  return fullName;
}
*/

//Arrow Function
/*
let showMyName = (firstName, lastName) => {
  let fullName = firstName + " " + lastName;
  return fullName
};
*/

//Arrow Function but ShortCut..
/*
let showMyName = (firstName, lastName) => {
  return firstName + " " + lastName
}
*/

//Arrow Function but ShortCut...arrow function ar moddhea akta matro paramitter niea kaj korle parenthasis() na dileao solbe... {} na dileao solbe...tobe kono paramitter na thakle parenthasis() obossoi dite hobe.

let showMyName = (firstName, lastName) => firstName + ' ' + lastName;

alert(showMyName('Moniruzzaman', 'Monir'));
