/*
============================================
; Title: Assignment 3.2
; Author: Richard Krasso
; Date: 9 December 2019
; Modified By: Clayton Stacy
; Description: Pattern Matching Function
============================================
*/ 

// Import header and write it to the console.
var header = require('../week-2/Stacy-header.js');
console.log(header.display('Clayton', 'Stacy', '3.2 Pattern Matching Functions'));

// Declare test variables, array of objects with two values each
const valPairs = [{val1: 3, val2: 3}, {val1: 10, val2: 1643}, {val1: 234, val2: 13425}];

//Checks for match between two values and return boolean
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

//Passes in test value array and checks for match on each, then logs based on result
valPairs.forEach(i => (i.val1 === i.val2 ? logMatch(i.val1, i.val2) : logMismatch(i.val1, i.val2)));