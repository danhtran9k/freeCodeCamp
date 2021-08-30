/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-pop

==================================================================
DESCRIPTION

Manipulate Arrays With pop()Passed
Another way to change the data in an array is with the .pop() function.

.pop() is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable. In other words, .pop() removes the last element from an array and returns that element.

Any type of entry can be popped off of an array - numbers, strings, even nested arrays.

var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
The first console.log will display the value 6, and the second will display the value [1, 4].

Use the .pop() function to remove the last item from myArray, assigning the popped off value to removedFromMyArray.

==================================================================
TESTCASE

myArray should only contain [["John", 23]].

You should use pop() on myArray.

removedFromMyArray should only contain ["cat", 2].

==================================================================
SETUP

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
var removedFromMyArray;

==================================================================

*/

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
var removedFromMyArray = myArray.pop(); 
