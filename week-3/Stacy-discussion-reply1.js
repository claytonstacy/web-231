/*
============================================
; Title: Discussion 3.1
; Author: Jess Cruse
; Date: 12 Dec 2019
; Modified By: Clayton Stacy
; Description: This program demonstrates the
; use of else if in JavaScript.  It has 2+
; errors which need resolved.
;===========================================
*/

//Header
const header = require('../week-2/Stacy-header.js');
console.log(header.display("Clayton", "Stacy", "Discussion 3.1_Reply"));

//Start Program
var x = 2;
var y = 4;

//evaluating the relationship of the numbers
if (x == y) {
  console.log("x and y are the same");  //response of the numbers are the same
}
else if (x > y) {
  console.log(x + " is greater than " + y); //response if x is greater than y
}
else if (y > x) {
  console.log(y + " is greater than " + x);  //response if y is greater than x
}
else {
  console.log("So sorry! Something didn't go as expected.");
  };
    //error message if above logic isn't met

  //END Program

  /* The first error I found was a misplaced semicolon after the else if test.  The next error I found was a the second
  else/if was wrapped in parenthses instead of curly brackets.  The last error found was no curly brackets around the else
  function
  */