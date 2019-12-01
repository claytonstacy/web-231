/*
============================================
; Title: Assignment 1.1
; Author: Angel Padilla
; Date: 11-27-2019
; Modified By: Clayton Stacy
; Description: This program is created to contain two errors
;===========================================
*/ 

// Person object with a name property and a speak method. the speak method takes a parameter to console log text.
var person = {
    name: "",
    speak: function(){
        if(this.name != ""){
            console.log("Hello my name is " + this.name);    
        }else {
            console.log("Please assign a value to name.");
        }
        
    }
}

// Assign a name value to the person object
person.name = "Clayton";

// Calling the speak method and passing in the person name value.
person.speak(person.name);

/*
Solution:  There are four errors I've found. The first two are the same.  The property "name" from the object person is not
in scope and can't be referenced inside of the function speak.  To fix this I referenced it as this.name.  Another error is in the 
if statement test condition.  Null and an empty string do not explicity evaluate to equal, so the !== is not properly evaluated as true.
To fix this I changed all references to an empty string (""). The other error is the reference to person in the assignment statement.  
Objects immutable, but you can reassign properties of the object.  Therefore I assigned the name property of person using 
dot notation.  This fixed the log statements when the speak function is run.
*/