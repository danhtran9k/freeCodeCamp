/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/chaining-if-else-statements

==================================================================
DESCRIPTION

Chaining If Else Statements
if/else statements can be chained together for complex logic. Here is pseudocode of multiple chained if / else if statements:

if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}
Write chained if/else if statements to fulfill the following conditions:

num < 5 - return Tiny
num < 10 - return Small
num < 15 - return Medium
num < 20 - return Large
num >= 20 - return Huge

==================================================================
TESTCASE

You should have at least four else statements

You should have at least four if statements

You should have at least one return statement

testSize(0) should return the string Tiny

testSize(4) should return the string Tiny

testSize(5) should return the string Small

testSize(8) should return the string Small

testSize(10) should return the string Medium

testSize(14) should return the string Medium

testSize(15) should return the string Large

testSize(17) should return the string Large

testSize(20) should return the string Huge

testSize(25) should return the string Huge

==================================================================
SETUP

function testSize(num) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

testSize(7);

==================================================================

*/

function testSize(num) {
  // Only change code below this line

  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }

  // Only change code above this line
}

testSize(7);
