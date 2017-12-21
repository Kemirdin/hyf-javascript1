'use strict';
// 8- Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.
let Stichting = 'HackYourFuture';
console.log ("Code school name is: " + Stichting );

let Programmer = "Full Stack Web Developer";
console.log ("This program will prepare you for a job as a: " + Programmer);
let curriculum = ['html-css-cli', 'JavaScript-GIT-debugging','Node','Database','React','Project'];

console.log ("Schools Curriculum : " + curriculum);

let duration = 6;
console.log("Duration of Program: " + duration + "months");

console.log ("The type of my variable Stichting is string ");
console.log ("The type of my variable Programmer is string");
console.log ("The type of my variable curriculum is array");
console.log ("The type of my variable duration is numeric ");

console.log (typeof Stichting);
console.log (typeof Programmer);
console.log (typeof curriculum);
console.log (typeof duration);

if (typeof Stichting == typeof Programmer) {
  console.log ('SAME TYPE');
} else {
  console.log ('NOT THE SAME TYPE');
}