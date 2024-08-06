"use strict"; 

//=========> Function Declaration vs Function Expression <==========



//function Declaration
function getMyName(nameFunc) {
  nameFunc();
}


//function Expression
let myFullName = function() {
  alert ("Monirul Islam");
}


getMyName(myFullName);








//Global Variable

let showMyName;

if (true) {
  showMyName = function () {
    console.log ("Monir");
  }

  showMyName();
}
showMyName();



