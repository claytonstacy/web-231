/*
============================================
Title: Assignment 7.2
Author: Professor Krasso
Date: 26 January 2020
Modified By: Clayton Stacy
Description: Cosntructor Functions
============================================
*/ 


// Import header and write it to the console.

var header = require('../week-2/Stacy-header.js');
console.log(header.display('Clayton', 'Stacy', '7.2' ));

//Create an employee constructor object with id, firstName, lastName, and title
function employee(id, firstName, lastName, title) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
}

//Create an array of 5 employees using the employee constructor
var employees = [
    new employee(1, 'Joe', 'Smith', 'Manager'),
    new employee(2, 'Jane', 'Doe', 'Supervisor'),
    new employee(3, 'Michael', 'Scott', 'Assistant to the Regional Manager'),
    new employee(4, 'King', 'Kong', 'Bouncer'),
    new employee(5, 'Teddy', 'Roosevelt', 'President')
];

//Loop through the array and output object matching the given format
employees.forEach(e => console.log(`${e.id} ${e.firstName} ${e.lastName} ${e.title}`));