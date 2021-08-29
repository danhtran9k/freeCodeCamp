/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional

==================================================================
DESCRIPTION

Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.



==================================================================
TESTCASE

addTogether(2, 3) should return 5.

addTogether(23, 30) should return 53.

addTogether(5)(7) should return 12.

addTogether("http://bit.ly/IqT6zt") should return undefined.

addTogether(2, "3") should return undefined.

addTogether(2)([3]) should return undefined.

==================================================================
SETUP

function addTogether() {
  return false;
}

addTogether(2,3);

==================================================================

*/

