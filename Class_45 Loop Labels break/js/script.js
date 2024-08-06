"use strict"; 

//==================> Loop Labels <=====================

//kono loop thakea amra jode sorasori ber hoiea aste sai sa khatrea amra loop break baboher korbo. 

// Monir:
// for (let loopOne = 1; loopOne <= 3; loopOne++) {
//   console.log("LoopOne: " + loopOne);
//   for (let loopTwo = 1; loopTwo <= 10; loopTwo++) {
//     console.log("---------LoopTwo " + loopTwo);

//     if (loopOne == 2 && loopTwo == 5) {
//       break Monir;
//     }
//   }
// }


console.log("Hello")

LoopEnd:
for ( let loopOne = 1; loopOne <= 5; loopOne++) {
  console.log("LoopOne: " + loopOne);
  for(let loopTwo = 1; loopTwo <= 10; loopTwo++) {
    console.log("----------LoopTwo: " + loopTwo);
    if ( loopOne == 3 && loopTwo == 5) {
      break LoopEnd;
    }
  }
}


