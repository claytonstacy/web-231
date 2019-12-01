/*
============================================
; Title: Assignment 1.1_Solution
; Author: Brendan Mulhern
; Date: 25 November 2019
; Modified By: Clayton Stacy
; Description: Find and fix the errors
============================================
*/ 

var newDate = new Date().toLocaleDateString();
var b = 2;
var c = 50;

console.log(newDate);
console.log(b * c);

/*
There are a couple of ways to solve this problem, but I've chosen to move the assignment statement outside of the function.  This changes
the scope, but demonstrates how to pass a parameter into a function.  This wasn't really a breaking issue though, since you could just do
the assignment in the function and not pass in any parameters.  The real breaks were:
1. the fact that the curly braces and parentheses were switched (curlies go around the function and parentheses around parameters). 
2. The first sound, in the parameters, is unnecessary since you are doing the data assignment in the function (although this is where I 
    chose to move it out of the function)
3. The function isn't called so there won't be any output.
*/

/* For this week's discussion board assignment, create a simple JavaScript program using values and variables with at least two errors.
The program should not execute and there should be at least two errors in the code you post to Blackboard.  Hopefully, this goes without
saying, but don't forget code attribution.  This is due by Thursday.  Your replies this week are all about finding and fixing errors in
a classmates program.  You must provide full solutions to two other debugging programs.  In your response, provide the entire end-to-end
solution (I should be able to take the response code, copy into VS Code, and run the program without errors), a detailed explanation of
what was wrong and what you did to fix it.  Do not just post, "Missing semicolon - added semicolon.  Misspelled integer."  Any responses
that do not include a fully working solution and a detailed explanation of what you did to fix it will not be awarded points.  
Use GitHub to store and solve the programs. */