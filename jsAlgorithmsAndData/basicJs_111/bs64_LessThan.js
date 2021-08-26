/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-less-than-operator

==================================================================
DESCRIPTION

Comparison with the Less Than Operator
The less than operator (<) compares the values of two numbers. If the number to the left is less than the number to the right, it returns true. Otherwise, it returns false. Like the equality operator, the less than operator converts data types while comparing.

Examples

2   < 5
'3' < 7
5   < 5
3   < 2
'8' < 4
In order, these expressions would evaluate to true, true, false, false, and false.

Add the less than operator to the indicated lines so that the return statements make sense.

==================================================================
TESTCASE

testLessThan(0) should return the string Under 25

testLessThan(24) should return the string Under 25

testLessThan(25) should return the string Under 55

testLessThan(54) should return the string Under 55

testLessThan(55) should return the string 55 or Over

testLessThan(99) should return the string 55 or Over

You should use the < operator at least twice

==================================================================
SETUP

function testLessThan(val) {
  if (val) {  // Change this line
    return "Under 25";
  }

  if (val) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

==================================================================

*/

function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);
