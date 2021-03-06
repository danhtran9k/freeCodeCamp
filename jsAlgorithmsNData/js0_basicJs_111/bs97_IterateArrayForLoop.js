/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/iterate-through-an-array-with-a-for-loop

==================================================================
DESCRIPTION

Iterate Through an Array with a For Loop
A common task in JavaScript is to iterate through the contents of an array. One way to do that is with a for loop. This code will output each element of the array arr to the console:

var arr = [10, 9, 8, 7, 6];
for (var i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
Remember that arrays have zero-based indexing, which means the last index of the array is length - 1. Our condition for this loop is i < arr.length, which stops the loop when i is equal to length. In this case the last iteration is i === 4 i.e. when i becomes equal to arr.length - 1 and outputs 6 to the console. Then i increases to 5, and the loop terminates because i < arr.length is false.

Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.

==================================================================
TESTCASE

total should be declared and initialized to 0.

total should equal 20.

You should use a for loop to iterate through myArr.

You should not attempt to directly assign the value 20 to total.

==================================================================
SETUP

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line

==================================================================

*/

// Setup
var myArr = [2, 3, 4, 5, 6];
let total = 0;
// Only change code below this line
for (var i = 0; i < myArr.length; i++) {
  total += myArr[i]
}
