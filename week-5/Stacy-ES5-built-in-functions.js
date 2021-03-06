/*
============================================
; Title: Assignment 5.2
; Author: Professor Krasso
; Date: 3 January 2020
; Modified By: Clayton Stacy
; Description: ES5 Built-in Functions
============================================
*/ 

/*
  Expected output:

  FirstName LastName
  Exercise 5.2
  Today's Date

  Oysters
  Shrimp
  Steak
  Tacos
  Sushi

*/

// Import header and write it to the console.

var header = require('../week-2/Stacy-header.js');
console.log(header.display('Clayton', 'Stacy', '5.2' ));



//Declare an array of your 5 favorite foods
const favoriteFoods = ['sushi', 'curry', 'barbeque', 'greek', 'pizza'];

//Use a forEach loop to log each value in the array to the conosle using a template literal
favoriteFoods.forEach(f => console.log(f));