/*
============================================
; Title: Assignment 4.4
; Author: Professor Krasso
; Date: 22 December 2019
; Modified By: Clayton Stacy
; Description: Practice using filter predicates
============================================
*/ 

// Import header and write it to the console.
var header = require('../week-2/Stacy-header.js');
console.log(header.display('Clayton', 'Stacy', '3.2 Pattern Matching Functions'));

//Declare an array of 5 states
let states = ['Florida', 'Kansas', 'Oklahoma', 'Georgia', 'California'];

//build function to return true or false comparing two strings values
function getState(el, val) {
    return el === val
}

//Use the filter method on the states array to find the element matching the string passed in
console.log( states.filter(function(s) {
    return getState(s,'Oklahoma')
})[0]);