/*
============================================
; Title:  3.3 Control Statements
; Author: Professor Krasso
; Date:   9 December 2019
; Modified by: Clayton Stacy
; Description: Displays a string message if the choice variable equals C
;===========================================
*/

// variable
const choice = "A";

// if...else statements
/* if (choice === "A") {
  console.log("A");
} else if (choice === "B") {
  console.log("B");
} else if (choice === "C") {
  console.log("Winner winner, chicken dinner!");
} else if (choice === "D") {
  console.log("D");
} else {
  console.log("Invalid choice");
} */

//Refactoring if...else to switch, logging letter to the console based on case
switch(choice) {
    case"A":
    console.log("A");
    break;
    case"B":
    console.log("B");
    break;
    case"C":
    console.log("C");
    break;
    case"D":
    console.log("D");
    break;
    default:
    console.log("Invalid Character");
    break;
}