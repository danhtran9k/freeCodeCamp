/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-strict-inequality-operator

==================================================================
DESCRIPTION

Comparison with the Strict Inequality Operator
The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. The strict inequality operator will not convert data types.

Examples

3 !==  3
3 !== '3'
4 !==  3
In order, these expressions would evaluate to false, true, and true.

Add the strict inequality operator to the if statement so the function will return the string Not Equal when val is not strictly equal to 17

==================================================================
TESTCASE

testStrictNotEqual(17) should return the string Equal

testStrictNotEqual("17") should return the string Not Equal

testStrictNotEqual(12) should return the string Not Equal

testStrictNotEqual("bob") should return the string Not Equal

You should use the !== operator

==================================================================
SETUP

// Setup
function testStrictNotEqual(val) {
  if (val) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

==================================================================

*/


function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);
  