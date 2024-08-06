"use strict"; 

//==================> 50 Defult Parameter  <=====================


function printName(firstName, lastName = "Test") {
  console.log(`Hello ${firstName} ${lastName}`);
}

printName("Monirul");






function result(firstName, lastName = "Islam") {
  console.log(`Hello ${firstName} ${lastName}`);
}
result("Monirul");