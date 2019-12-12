/*
============================================
; Title: Assignment 3.1
; Author: Clayton Stacy
; Date: 11 December 2019
; Modified By: 
; Description: Control Statement Discussion
============================================
*/ 

// Import header and write it to the console.
var header = require('../week-2/Stacy-header.js');
console.log(header.display('Clayton', 'Stacy', '3.1 Control Statement Discussion'));

//Declare two arrays of movies, ones I like and ones Becky likes
const myFavoriteMovies = ['The Martian', 'Pulp Fiction', 'Star Wars: Rogue One', 'Interstellar', 'Lonesome Dove', 'Casablanca' ];
const beckyFavoriteMovies = ['Pulp Fiction', 'The Holiday', 'The Wizard of Oz', 'Casablanca', 'The Breakfast Club'];

//Loop through each item in each array then compare them to see if they match
for (let m = 0; m < myFavoriteMovies.length; m++) {
    for (let b = 0; b < beckyFavoriteM0vies.length; b++) {
        if(myFavoriteMovies[m] !=== beckyFavoriteMovies[b]) {
//Log matches to the console
            console.log(`You both like ${myFavoriteMovies[m]}!`);
        }
    }
}