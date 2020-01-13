/*
============================================
; Title: Assignment 5.4
; Author: Professor Krasso
; Date: 3 January 2020
; Modified By: Clayton Stacy
; Description: Filtering/reducing complex data structures
============================================
*/ 
/*
Expected Output:

  FirstName LastName
  Assignment 5.4
  Today's Date

  -- COMPOSER BY RATING --
  Rating: 8
  Composer: Beethoven

  Rating: 10
  Composer: Mozart

  Rating: 9
  Composer: Bach

  Rating: 6
  Composer: Haydn

  Rating: 5
  Composer: Schubert

  -- COMPOSER BY GENRE --
  Genre: Classical
  Composer: Beethoven

  Genre: Classical
  Composer: Mozart

  Genre: Classical
  Composer: Bach

  Genre: Classical
  Composer: Haydn

  Genre: Classical
  Composer: Schubert
  */

// Import header and write it to the console.

var header = require('../week-2/Stacy-header.js');
console.log(header.display('Clayton', 'Stacy', '5.4 Filtering Complex Data Structures'));


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

var byRating = composers.map(function(composer) {
    return {
        'rating': composer.rating,
        'lastName': composer.lastName
    }
})

console.log(`  -- COMPOSER BY RATING --`);
byRating.forEach(function(composer) {
    console.log(`Rating: ${composer.rating}
Composer: ${composer.lastName}
`);
})

var byGenre = composers.map(function(composer) {
    return {
        'genre': composer.genre,
        'lastName': composer.lastName
    }
})

console.log(`  -- COMPOSER BY GENRE --`);
byGenre.forEach(function(composer) {
    console.log(`Genre: ${composer.genre}
Composer: ${composer.lastName}
`);
})