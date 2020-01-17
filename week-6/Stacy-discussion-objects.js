/*
============================================
Title: Assignment 6.1
Author: Clayton Stacy
Date: 16 January 2020
Description: Discussion Objects and Built in Objects
============================================
*/ 
/*
Expected output:

Clayton Stacy
6.1 Discussion Objects and Built in Objects
Date: 1/16/2020

TypeError: Assignment to constant variable.

Object {captain: "Dallas", science: "Ash", warrant: "Ripley"}
*/
// Import header and write it to the console.

var header = require('../week-2/Stacy-header.js');
console.log(header.display('Clayton', 'Stacy', '6.1 Discussion Objects and Built in Objects'));

//Declare an object with crew positions and names
const crew = {captain: 'Dallas',science: 'Ash', warrant: 'Ripley'}

//Try to reassign the object and catch the built in javascript error
try (crew) {
    crew = {captain: 'Ripley'};
} catch {
    console.log(error)
}

//Log the crew object to the console.
console.log(crew);