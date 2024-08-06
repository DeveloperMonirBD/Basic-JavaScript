"use strict"; 

//=> Logical (??) Null Colescing Operator   <==


/*
|| === or Operator 
&& === AND Operator  
! === Not Operator 


?? === Null Colescing Operator  //----> Kono function k shortcut korea lakhar jonno amra ai operator baboher korte pare. jode variable ta undefine na hoi abong null na hoi taholea variable tar moddhea ja value thakbe satakea ame result hisebea diea dibo
*/

let myName;

/*
if ( (myName !== undefined) && (myName !== null) ) {
  alert('Define');
} else {
  alert('Undefine');
}
*/


//shotrcut===> Ternary Operator ar maddhomea amra likhte pare...

//myName = ( (myName !== undefined) && (myName !== null) ) ? "Hello" : "By";


//shotrcut===> Null Colescing Operator ar maddhomea amra likhte pare...
myName = "Hello" ?? "By";

alert(myName);


