"use strict"; 

//==================> Local and Global Variable <=====================

// Apnii jokhon akta variable k kono akta function k variable ar moddhea declear korean tokhno sai variable ta local variable hisebea chinnito hoi......local valiable manea holo oi variable k apne sudhu oi function ar block ter moddheaii baboher korte parben.. oi block ar bairea access kortea parben na ba baboher korte parben na. orthat, local variable ar jaiga holo sudhumatro { ar moddher jaiga tuku } ... ar bairea kaj korbe na. are bairea baboher korlea error dakhabe.


//


let yourName = "Web Ship"; // Global Variable.. ja sob variable gula function ar bairea kaj korea takea global variable bolea... ata vitorea abong bairea sob jaigai kaj korea.

function myTutorial() {
  let myTutorial = "Md. Monirul Islam";  /// local Variable..
  console.log(myTutorial);
  myTutorial = "Test";
  console.log(myTutorial);
}

myTutorial();



console.log (yourName); // Global Variable..


