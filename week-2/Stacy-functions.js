/*
============================================
; Title: Assignment 2.4
; Author: Clayton Stacy
; Date: 1 December 2019
; Modified By: Clayton Stacy
; Description: Practice creating functions
============================================
*/ 

//Create function that takes in two strings and returns them concatenated
function fullName(first, last) {
    const nameArr = [first, last];
    return nameArr.join(" ");
};

console.log(fullName('Clayton', 'Stacy'));

//Create a function to take in three arguments and builds a new Date from them
function dateWriter (year, month, day) {
    return new Date(year, month, day);
}

console.log(dateWriter(2019, 9, 31));

//Create a function that takes in a number and the number of significant digits then formats the number with that number of significant digits
function formatNumber(num, numPositions) {
    return num.toFixed(numPositions);
}
console.log(formatNumber(5.15, 6));

//Create a function that takes in one string argument and converts it to an integer
function convertToInt (str) {
    return parseInt(str);
};

console.log(convertToInt('124'));

//Create a function that takes in one string argument and converts it to an float
function convertToFloat(str) {
    return parseFloat(str);
};

console.log(convertToFloat('124.4'));