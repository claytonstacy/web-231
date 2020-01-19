/*
============================================
Title: Assignment 6.4
Author: Professor Krasso
Date: 3 January 2020
Modified By: Clayton Stacy
Description: Nested Object Literals
============================================
*/ 

/*
  // Below is what I am expecting to see when I run your program - remove this before submitting your work
  // 50% of you will not read this and lose 25% of the awardable points.

  FirstName LastName
  Assignment 6.4
  Today's Date

  Ticket 105 was created on <today' date> and assigned to employee Bob Jones (Programmer I).
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