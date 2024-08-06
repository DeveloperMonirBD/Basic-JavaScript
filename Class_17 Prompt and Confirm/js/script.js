"use strict"; 
alert ("Hello");

//prompt alert ar moto akta function . user ar kas thakea kono data input nauar jonno prompt baboher kora hoi..ata alert ar motoi akta function but ata alert ar thakea aro oneak kisu dai.


// kono akta lekhar porea 1st () lekha hoi takea function bolea ... alert("Hello")... ata akta function. sarokom prompt tau akta function ..jamon----> prompt("Hello";)


let name = prompt ("Enter Your Name", "Monir"); // prompt ar moddhea kono value dilea takea argument bolea. jamon,, ("Enter Your Name")

// by defult user k kono nam dakhanor jonno amra second argument ,"Monir" baboher korte pare

console.log(typeof name);// ki valu sata janar jonno ata baboher kora hoi

console.log(name);


let firstName = prompt ("Enter Your First Name");
let lastName = prompt("Enter Your Last Name");

alert (`Hello ${firstName} ${lastName}`);





//user ar motamot janar jonno/ question korar jonno confirm baboher kora hoi..ok korlea ans asbea true are cancel korlea asbea false.

let isAdmin =  confirm("Are You Admin ?") // ata akta boolean karon atar ans sobsomai true/ false hoi.


console.log(typeof isAdmin);