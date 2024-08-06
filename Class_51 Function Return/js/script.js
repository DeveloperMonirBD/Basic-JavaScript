"use strict"; 

//==================> 51 Function Return  <=====================
// kono akta function thake ber hober jonno function return baboher kora history. are ber hober somai jode kono variable k na call kora hoi tahole undefine hobe.

function myName(firstName, lastName) {
  let fullName = `My Full Name Is ${firstName} ${lastName}`;
  return fullName;
}

let newName = myName("Monirul", "Islam");
console.log(newName);