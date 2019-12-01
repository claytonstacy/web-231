/*
============================================
; Title:  header.js
; Author: Clayton Stacy
; Date:   1 December 2019
; Modified By: Clayton Stacy
; Description: Exploring creating functions
;===========================================
*/

// Assigning property values
myName.first = "Clayton";
myName.last = "Stacy"

//Building the function
function myName() {
    const fullName = [myName.first, myName.last];
    return fullName;
};

//Logging function to the console
console.log(`Hello ${myName().join(" ")}`);