/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-inequality-operator

==================================================================
DESCRIPTION

Comparison with the Inequality Operator
The inequality operator (!=) is the opposite of the equality operator. It means not equal and returns false where equality would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.

Examples

1 !=  2
1 != "1"
1 != '1'
1 != true
0 != false
In order, these expressions would evaluate to true, false, false, false, and false.

Add the inequality operator != in the if statement so that the function will return the string Not Equal when val is not equivalent to 99

==================================================================
TESTCASE

testNotEqual(99) should return the string Equal

testNotEqual("99") should return the string Equal

testNotEqual(12) should return the string Not Equal

testNotEqual("12") should return the string Not Equal

testNotEqual("bob") should return the string Not Equal

You should use the != operator

==================================================================
SETUP

// Setup
function testNotEqual(val) {
  if (val) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

==================================================================

*/

// Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);
