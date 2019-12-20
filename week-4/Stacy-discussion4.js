/*
============================================
; Title: Assignment 4.1
; Author: Clayton Stacy
; Date: 19 December 2019
; Modified By: 
; Description: Arrays discussion, find two errors
============================================
*/ 

// Import header and write it to the console.
var header = require('../week-2/Stacy-header.js');
console.log(header.display('Clayton', 'Stacy', '3.2 Pattern Matching Functions'));

const teams = 'Steelers, Cowboys, Eagles, Ravens, Giants, Browns';

teams.forEach(teams => {
    if (team === 'Browns' || team === 'Steelers' || team === 'Ravens') {
        console.log(`The ${ team } play in the AFC North`)
    } else {
        console.log(`The ${ team } play in the NFC East`)
    }
})