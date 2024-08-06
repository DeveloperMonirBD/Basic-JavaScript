"use strict"; 

//==================> Switch Statement <=====================

// switch niea kaj korar jonno ak akta caser block jokhon ses hoiea jabe tokhon obossoi break statement baboher korte hobe. na holea porer sokol statement gulakea por por print koriea dibea.

// let amount = 300;

// switch (amount) {
//   case 100:
//     alert ("100");
//     break;
//   case 500:
//     alert ("500");
//     break;
//   case 200:
//   case 300:
//   case 400:
//     alert ("300 or 200 or 400");
//     break;
//   default:
//     alert ("Invalid Amount");
// }





// User ar kas thakea ja value paua jai sata sobsomai strict mood a thakea... are a karonea value take number a convert korea nauar  jonno Unary+ ta baboher kora hoi.

let amount = prompt ("Enter Amount: ");

switch (+amount) {
  case 100:
    alert ("100");
    break;
  case 500:
    alert ("500");
    break;
  case 200:
  case 300:
  case 400:
    alert ("300 or 200 or 400");
    break;
  default:
    alert ("Invalid Amount");
}

