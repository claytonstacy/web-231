/*
============================================
; Title: Assignment 3.4
; Author: Clayton Stacy
; Date: 10 December 2019
; Modified By: Clayton Stacy
; Description: Loops
============================================
*/ 

// Import header and write it to the console.
var header = require('../week-2/Stacy-header.js');
console.log(header.display('Clayton', 'Stacy', '3.4 Loops'));

//Declare a value between 1 and 10
var compareVal = 3;
//Functions to compare two avlues and log outcome to console
var match = (x,y) => {
    if (x === y ) {
        return true;
    } else {
        return false;
    }
};
//Logs message to console in mismatch case
var logMismatch = (x,y) => {
    if (x !== y) {
        console.log(`${x} doesn't match ${y}`);
    }
};

//Logs message to console in match case
var logMatch = (x,y) => {
    if (x === y) {
        console.log(`${x} matches ${y}`);
    }
};
//Function to generate a random number
function randomNumber() {
    return Math.floor((Math.random() * 10) + 1)
  }

//Loop to create 10 random numbers, compare them to the compareVal, and call the match functions to log the results
var i =0;
while (i < 10) {
    let randomVal = randomNumber();
    if (match(randomVal, compareVal)) {
        logMatch(randomVal, compareVal);
    } else {
        logMismatch(randomVal, compareVal);
    }
    i++
};