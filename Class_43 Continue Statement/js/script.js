"use strict"; 

//==================> Continue Statement <=====================

// kono akta nidristo itration k bad diea onno sokol itration k dahkanor jonno continue statement baboher kora hoi.

// for ( let count = 1; count <=10; count++ ) {
//   if (count == 5 || count == 8) {
//     continue;
//   }
//   console.log("Hello " + count);
// }




///Example: Bivinno vabea while loop ar maddhomea whileCount++ ta baboharer nieom;

//Example No:1
// let whileCount = 1;

// while ( whileCount <=10 ) {
//   console.log ("whileCount " + whileCount);
//   whileCount++;
// }



//Example No:2

// let whileCount = 1;

// while ( whileCount <=10 ) {
//   whileCount++;
//   if ( whileCount == 5 || whileCount == 8) {
//     continue;
//   }
//   console.log ("whileCount " + whileCount);
// }




//Example No:3

let whileCount = 1;

while ( whileCount <=10 ) {
 
  if ( whileCount == 5 || whileCount == 8) {
    whileCount++;
    continue;
  }
  console.log ("whileCount " + whileCount);
  whileCount++;
}