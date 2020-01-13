/*
============================================
; Title: Discussion 5.1
; Author: Izabella Kornelis
; Date:  12 January 2020
; Modified by: Clayton Stacy
; Description: A broken JavaScript program using a keyed collection array with at least two (2) errors.
;===========================================
*/

/* // Require statement that imports the header.js file from my root directory.
const header = require('../kornelis-header.js')

// Call the console.log() function and output a well-formatted header
console.log(header.display("Izabella", "Kornelis", "Assignment 5.1"));
// new line
console.log('\n')
 */
// start program

// variable declaration
let animals = new Map ();
animals.set('cat','Cheaka');
animals.set('dog','Billy');
animals.set('fish','Matrix');

//function to display name of pets
for (let [key, value] of animals){
  console.log ('I have a pet named ' + value + '.') // Should display  " I have a pet named Cheaka." " I have a pet named Billy." " I have a pet named Matrix."
}

// clear animals and adds new pet
animals.clear();
animals.set('fish','Glitch');

//function to display name of pets
for (let [key,value] of animals){
  console.log ('I had a pet named ' + value + '.') // Should display  " I had a pet named Glitch."
}

//end program