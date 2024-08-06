'use strict';

//==>  Javascript Object / [] squire braket Notation <===

let student = {
  name: 'Monir',
  age: 27,
  'School Name': 'Test School', // space thakle Obossoi "" / '' cotation baboher korte hobe.
};

console.log(student.age); // kono Object ar vitorer kisukea dakhanor jonno .age baboher kora hoi.

console.log(student['School Name']); // space diea kono variable define korle [] notation baboher kora hoi. Dot notation kaj na korle Squire Notation Baboher kora hoi.

let schoolName = 'School Name';
console.log(student[schoolName]); //Dynamic vabe Space thakle Squire notation baboher kora hoi. tobe Daynamic vabe Dot notation kaj kore na. a jonno Squire Notation baboher kora hoi. Ati baboher kora best Practise.

student.favSub = 'Math'; // object ar moddhea kono new variable add korar jonno .favSub likhte hobe
student['ComposaruSub'] = 'English'; // a vabeo Squire Notation ar maddhomeo Add kora jai.

delete student.age; // age variable remove/delete hoie jabe.
delete student['age']; // a vabeo Aquire Notation ar maddhome remove/delete kora jai.

console.log(student);
