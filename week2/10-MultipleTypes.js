'use strict';
// 10. Write a program to answer the following questions:
// 10.1 Can you store multiple types in an array? Numbers and strings? Make an example that illustrates your answer.
// 10.2 Can you compare infinities? (Not in Eyad's world) - does 6/0 === 10/0? How can you test this?
// 10.3 Add console.log statements to the above program's in which you show that you understand the concepts (just like you've done in the above assignments).
let multi = ["Programmers", 2017, true];
console.log (multi);
console.log ("We can store multiple types in an array.");

let x = 6;
let y = 10;
if (x / 0 === y / 0) {
  console.log (true);
} else {
  console.log (false);
}
