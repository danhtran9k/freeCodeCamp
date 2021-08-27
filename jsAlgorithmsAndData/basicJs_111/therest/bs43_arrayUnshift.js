/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-unshift

==================================================================
DESCRIPTION

Manipulate Arrays With unshift()Passed
Not only can you shift elements off of the beginning of an array, you can also unshift elements to the beginning of an array i.e. add elements in front of the array.

.unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.

Example:

var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
After the shift, ourArray would have the value ["J", "cat"]. After the unshift, ourArray would have the value ["Happy", "J", "cat"].

Add ["Paul",35] to the beginning of the myArray variable using unshift().



==================================================================
TESTCASE

myArray should now have [["Paul", 35], ["dog", 3]].

==================================================================
SETUP

// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line

==================================================================

*/

// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul",35]);

