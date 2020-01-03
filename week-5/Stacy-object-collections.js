/*
============================================
; Title: Assignment 5.3
; Author: Professor Krasso
; Date: 3 January 2020
; Modified By: Clayton Stacy
; Description: Object Collections
============================================
*/ 

// Import header and write it to the console.

var header = require('../week-2/Stacy-header.js');
console.log(header.display('Clayton', 'Stacy', '5.3 Object Collections'));

/*
  Expected output:

  FirstName LastName
  Exercise 5.3
  Today's Date

  -- COMPOSERS --
  Last Name: Beethoven, Genre: Classical, Rating: 8
  Last Name: Mozart, Genre: Classical, Rating: 10
  Last Name: Bach, Genre: Classical, Rating: 9
  Last Name: Haydn, Genre: Classical, Rating: 6
  Last Name: Schubert, Genre: Classical, Rating: 5
*/

//Declare an array of composer objects with first name, last name, genre and rating (1-10)
const composers = [{
   firstName: 'Ludwig',
   lastName: 'Beethoven',
   genre: 'Classical',
   rating: '8'
},
{
    firstName: 'Wolfgang',
    lastName: 'Mozart',
    genre: 'Classical',
    rating: '10'
 },
 {
    firstName: 'Johann',
    lastName: 'Bach',
    genre: 'Classical',
    rating: '9'
 },
 {
    firstName: 'Joseph',
    lastName: 'Haydn',
    genre: 'Classical',
    rating: '6'
 },
 {
    firstName: 'Franz',
    lastName: 'Schubert',
    genre: 'Classical',
    rating: '5'
 }
]

//Use a forEach loop to iterate over each object console out the last name, genre and rating
console.log(`-- Composers --`)
composers.forEach(c => {console.log(`Last Name: ${c.lastName}, Genre: ${c.genre}, Rating: ${c.rating}`)})