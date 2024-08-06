"use strict"; 

//==================> 52 Function Naming  <=====================


function myName(firstName, lastName) {
  let fullName = `My Full Name Is ${firstName} ${lastName}`;
  return fullName;
}

let newName = myName("Monirul", "Islam");
console.log(newName);