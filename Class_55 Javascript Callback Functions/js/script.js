"use strict"; 

//==========> Javascript Callback Functions   <==============

// callback function holo amra kono akta function k kono akta function ar moddhea pass korlam jati ki na call holeaoo hote pare.



function getMyName(nameFunc) {
  nameFunc();
}



let myFullName = function() {
  alert ("Monirul Islam");
}


getMyName(myFullName);



