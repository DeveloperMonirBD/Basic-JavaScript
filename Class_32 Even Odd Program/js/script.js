"use strict"; 




//========> Even Odd Program <==========

/*

Even Number : ja sokol number jor sa sokol number k  Even number bolea.. kono akta number k 2 dara vag korlea jode vagses na thakea taholea  sata Even number hobea

Odd Number : ja sokol Number Bijor sa sokol number k Odd Number bolea.. kono akta number k 2 dara vag korlea jode vagses thakea taholea  sata Odd number hobea

*/



let num =  prompt ("Enter Number: ");
num = Number(num);
let remainder = num % 2;

if ( remainder == 0  ) {
  alert (num + " is Even Number");
} else {
  alert (num + " is Odd Number; ");
}