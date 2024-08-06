"use strict"; 


// apner kasea akta type ar data/ value asea sata k poriborton korea onno type a niea jate saisen.. ata kei bola hoi data custing....... jamon, apner kasea akta string type ar value asea apne sata k poriborton korea number/boolean/etc.. tea poriborton korte saisen...

/*
let price = 100;
alert (typeof price); // Number
let newPrice = String(price); // "100"
alert (typeof newPrice); //String
*/





// ja kono type ar value takea amra string a poriborton korte pare ai vabe
/*
let test = null; //null

alert(typeof test); //object
alert(test);

test = String(test); // "null"
alert(typeof test); //string
alert(test);
*/





/*
// String to Number
let price = "100";
alert(typeof price); //String
let newPrice = Number(price); //100
alert(typeof newPrice); //Number
*/





// Uses Prompt
let price1 = prompt("Enter Your Price");
alert(typeof price1);
let newPrice1 = Number (price1);
alert(typeof newPrice1); //number



/*
 User ja Value dite pare tar upor vitte korea folafol.


Number("100"); // 100

Number(100); // 100

Number("sdhhfikhefihi"); // NaN

Number(null); // 0

Number(undefined); // NaN

Number(true); // 1

Number(false) // 0

Number(     525   ); // 525

Number("525a"); // Nan

Number("              "); // 0

*/
