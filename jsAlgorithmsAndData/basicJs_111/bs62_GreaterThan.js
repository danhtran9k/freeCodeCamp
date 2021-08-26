/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-greater-than-operator

==================================================================
DESCRIPTION

Comparison with the Greater Than Operator
The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.

Like the equality operator, the greater than operator will convert data types of values while comparing.

Examples

5   >  3
7   > '3'
2   >  3
'1' >  9
In order, these expressions would evaluate to true, true, false, and false.

Add the greater than operator to the indicated lines so that the return statements make sense.

==================================================================
TESTCASE

testGreaterThan(0) should return the string 10 or Under

testGreaterThan(10) should return the string 10 or Under

testGreaterThan(11) should return the string Over 10

testGreaterThan(99) should return the string Over 10

testGreaterThan(100) should return the string Over 10

testGreaterThan(101) should return the string Over 100

testGreaterThan(150) should return the string Over 100

You should use the > operator at least twice

==================================================================
SETUP

function testGreaterThan(val) {
  if (val) {  // Change this line
    return "Over 100";
  }

  if (val) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

==================================================================

*/

function testGreaterThan(val) {
    if (val > 100) {  // Change this line
      return "Over 100";
    }
  
    if (val > 10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);
