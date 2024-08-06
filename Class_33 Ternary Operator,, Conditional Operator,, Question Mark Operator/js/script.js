"use strict"; 




//=> Ternary Operator,,Conditional Operator,,Question Mark Operator  <==

// ? ata akta ternary Operator.. karon ata 3 ta operend niea kaj korea..
//jamon ... (expression) ? (value1) : (value2)


let userAccess;
let username = prompt("Enter Username: ");

/*
if (username == 'sumon') {
  userAccess = "Admin";
} else {
  userAccess = "Moderator";
}

alert(userAccess);
*/


// if/else opreator k sonkhepea lekhar jonno ternary Operator Baboher kora hoi.. ternary operator sobsomai baboher kora hoi na ... sudhui matro jokhon valu take store korar proijon hoi tokhon baboher kora hoi..



// userAccess = (username == 'sumon') ? "Admin" : "Moderator";
// alert (userAccess);


let firstName = "Monir";
let lastName = "Khan";
 userAccess = (username == 'sumon') ? firstName : lastName;
 alert (userAccess);