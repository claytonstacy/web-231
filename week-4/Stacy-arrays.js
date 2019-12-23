/*
============================================
; Title: Assignment 4.2
; Author: Professor Krasso
; Date: 22 December 2019
; Modified By: Clayton Stacy
; Description: Practice creating and iterating over arrays
============================================
*/ 

// Import header and write it to the console.
var header = require('../week-2/Stacy-header.js');
console.log(header.display('Clayton', 'Stacy', '3.2 Pattern Matching Functions'));

//Declare an array containing 5 fruits
const fruits = ['Apples', 'Bananas', 'Kiwi', 'Grapes', 'Oranges'];

//Create a function called get fruits that iterates through an array and logs each item to the console.
function getFruits(arr) {
    for (i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};
//Call the function and pass in the fruits array
getFruits(fruits);