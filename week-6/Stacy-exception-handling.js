/*
============================================
Title: Assignment 6.2
Author: Professor Krasso
Date: 3 January 2020
Modified By: Clayton Stacy
Description: Exception Handling
============================================
*/ 


// Import header and write it to the console.

var header = require('../week-2/Stacy-header.js');
console.log(header.display('Clayton', 'Stacy', '6.2' ));

//Create a block of code which will create an error to try
const arr = [1,2,3,4,5];

var arrFunction = function() {
    arr = [6,7,8,9,10];
};

//Try the block of code, catch the error and log it, log a custom message in the finally block
try {
    arrFunction();
} catch(err) {
    console.log('Error', err)
} finally {
    console.log(arr);
}