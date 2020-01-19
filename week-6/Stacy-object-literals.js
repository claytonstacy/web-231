/*
============================================
Title: Assignment 6.3
Author: Professor Krasso
Date: 3 January 2020
Modified By: Clayton Stacy
Description: Object Literals
============================================
*/ 


// Import header and write it to the console.

var header = require('../week-2/Stacy-header.js');
console.log(header.display('Clayton', 'Stacy', '6.3' ));

//Declare an object ticket with the properties id, name, and requestor
const ticket = {id: 111, name: 'Help Desk Support', requestor: 'Jane'};

//Log each field to the console in the correct format
console.log(`{id: ${ticket.id}, name: ${ticket.name}, requestor: ${ticket.requestor}}`);