'use strict';

//==>  Dynamic Object Properties <===

let student = {
  name: 'Monir',
  age: 27,
  'School Name': 'Test School', // space thakle Obossoi "" / '' cotation baboher korte hobe.
};


let schoolName = 'School Name';
console.log(student[schoolName]); //Dynamic vabe Space thakle Squire notation baboher kora hoi. tobe Daynamic vabe Dot notation kaj kore na. a jonno Squire Notation baboher kora hoi. Ati baboher kora best Practise.


console.log(student);
