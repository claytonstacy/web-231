/*
============================================
; Title:  Stacy-function-properties.js
; Author: Clayton Stacy
; Date:   1 December 2019
; Modified By: Clayton Stacy
; Description: Exploring function properties
;===========================================
*/

// Assigning property values
myName.first = "Clayton";
myName.last = "Stacy"

//Building the function, building array to return both values
function myName() {
    const fullName = [myName.first, myName.last];
    return fullName;
};

//Logging function to the console after joining the returned array with a space between each element
console.log(`Hello ${myName().join(" ")}`);