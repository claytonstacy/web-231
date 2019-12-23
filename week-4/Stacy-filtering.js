/*
============================================
; Title: Assignment 4.3
; Author: Professor Krasso
; Date: 22 December 2019
; Modified By: Clayton Stacy
; Description: Filtering over arrays to match values
============================================
*/ 

// Import header and write it to the console.
var header = require('../week-2/Stacy-header.js');
console.log(header.display('Clayton', 'Stacy', '3.1 Control Statement Discussion'));

//Declare an arrays of vehicles
const vehicles = ['Ford', 'Honda', 'Toyota', 'Subaru', 'Chevy'];


//Loop through each item in an array and compare to the val param to see if they match
function getValue(arr, val) {
    for (let m = 0; m < arr.length; m++) {
        if(arr[m] == val) {
            //Log the match to the console
            console.log(`${arr[m]} is in the vehicles array!`);
        }
    }
}
//Call the getValue function, pass in the vehicles array and a value for the second param
getValue(vehicles, 'Ford');