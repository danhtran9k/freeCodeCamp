/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/assignment-with-a-returned-value

==================================================================
DESCRIPTION

Assignment with a Returned ValuePassed
If you'll recall from our discussion of Storing Values with the Assignment Operator, everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable.

Assume we have pre-defined a function sum which adds two numbers together, then:

ourSum = sum(5, 12);
will call sum function, which returns a value of 17 and assigns it to ourSum variable.

Call the processArg function with an argument of 7 and assign its return value to the variable processed.

==================================================================
TESTCASE

processed should have a value of 2

You should assign processArg to processed

==================================================================
SETUP

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

==================================================================

*/

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

processed = processArg(7)
