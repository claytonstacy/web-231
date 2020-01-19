/*
============================================
Title: Assignment 6.4
Author: Professor Krasso
Date: 3 January 2020
Modified By: Clayton Stacy
Description: Nested Object Literals
============================================
*/ 


// Import header and write it to the console.

var header = require('../week-2/Stacy-header.js');
console.log(header.display('Clayton', 'Stacy', '6.4' ));

//Declare an object ticket with a nested object person inside.
const ticket = {
    id: 111,
    person:{id: 222, firstName: 'Jane', lastName: 'Smith', jobTitle: 'Administrator'},
    dateCreated: new Date(2020, 0, 10),
    priority: 4
}

//Log a message to the console using dot notation to build the prescribed format.
console.log(`Ticket ${ticket.id} was created on ${ticket.dateCreated.toDateString()} and assigned to employee ${ticket.person.firstName} ${ticket.person.lastName} (${ticket.person.jobTitle}).`);