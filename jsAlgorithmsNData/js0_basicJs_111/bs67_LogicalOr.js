/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparisons-with-the-logical-or-operator

==================================================================
DESCRIPTION

Comparisons with the Logical Or Operator
The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

The logical or operator is composed of two pipe symbols: (||). This can typically be found between your Backspace and Enter keys.

The pattern below should look familiar from prior waypoints:

if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
will return Yes only if num is between 5 and 10 (5 and 10 included). The same logic can be written as:

if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside.

==================================================================
TESTCASE

You should use the || operator once

You should only have one if statement

testLogicalOr(0) should return the string Outside

testLogicalOr(9) should return the string Outside

testLogicalOr(10) should return the string Inside

testLogicalOr(15) should return the string Inside

testLogicalOr(19) should return the string Inside

testLogicalOr(20) should return the string Inside

testLogicalOr(21) should return the string Outside

testLogicalOr(25) should return the string Outside

==================================================================
SETUP

function testLogicalOr(val) {
  // Only change code below this line

  if (val) {
    return "Outside";
  }

  if (val) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);

==================================================================

*/

function testLogicalOr(val) {
    // Only change code below this line
  
    if (val < 10 || val > 20 ) {
      return "Outside";
    }
  
    // Only change code above this line
    return "Inside";
  }
  
  testLogicalOr(15);
