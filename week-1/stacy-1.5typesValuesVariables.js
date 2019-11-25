/*
============================================
; Title: Assignment 1.5
; Author: Professor Massoud
; Date: 24 November 2019
; Modified By: Clayton Stacy
; Description: Types, Values, and Variables
============================================
*/ 

var firstNameA = 'John';
var lastNameA = 'Smith';
var addressA = '123 South 3rd St';
var payRateA = 15.5
var hireDateA = new Date(2018, 2, 10);
var hireDateASlash = hireDateA.toLocaleDateString();
var firstNameB = 'Bob';
var lastNameB = 'Jones';
var addressB = '543 North L St';
var payRateB = 17.5
var hireDateB = new Date(2016, 2, 10);
var hireDateBSlash = hireDateB.toLocaleDateString();
var firstNameC = 'Elizabeth';
var lastNameC = 'Brown';
var addressC = '3452 East Washington Dr';
var payRateC = 19.5
var hireDateC = new Date(2017, 2, 10);
var hireDateCSlash = hireDateC.toLocaleDateString();

//Logging each employee to the console.  There weren't instructions to do this, but the instructions mentioned an output
console.log(`Employee A: ${firstNameA} ${lastNameA}, ${addressA}, ${payRateA}, ${hireDateASlash} `);
console.log(`Employee B: ${firstNameB} ${lastNameB}, ${addressB}, ${payRateB}, ${hireDateBSlash} `);
console.log(`Employee C: ${firstNameC} ${lastNameC}, ${addressC}, ${payRateC}, ${hireDateCSlash} `);