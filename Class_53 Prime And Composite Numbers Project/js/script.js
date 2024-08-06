"use strict"; 

//==========> 53 Prime And Composite Numbers Project  <==============

//Prime Number----> Moulik Sonkha----> Ja shokol sonkha ba Number k 1 othoba oi shonkha ba Number sara onno kono sonkha ba Number diea vag kora jaina take Prime Number Bolea.. jamon -----> 1, 3, 5, 7, 11


//Composite Numbers----> Jougig Sonkha------> 2, 4, 6, 8, 9, 10






// function getPrimeNumber (primenum) {

//   PrimeFirstLoop: for ( let outerNumber = 2; outerNumber <= primenum; outerNumber++ ) {
//     for ( let innerNumber = 2; innerNumber < outerNumber; innerNumber++ ) {
//       if ((outerNumber % innerNumber == 0 )) {
//         continue PrimeFirstLoop;
//       }
//     }
//     console.log( outerNumber + " is a prime number");
//   }

// }

// getPrimeNumber(200);


function getPrimeNumber (primenum) {
  
  primeFirstLoop: for ( let outerNumber = 2; outerNumber <= primenum; outerNumber++ ) {
    for ( let innerNumber = 2; innerNumber < outerNumber; innerNumber++ ) {
      if (( outerNumber % innerNumber == 0 )) {
        continue primeFirstLoop;
      }
    }
    console.log (outerNumber + " is a prime number");
  }
}

getPrimeNumber (200);