/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/sort-an-array-alphabetically-using-the-sort-method

==================================================================
DESCRIPTION

Sort an Array Alphabetically using the sort Method
The sort method sorts the elements of an array according to the callback function.

For example:

function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}
ascendingOrder([1, 5, 2, 3, 4]);
This would return the value [1, 2, 3, 4, 5].

function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}
reverseAlpha(['l', 'h', 'z', 'b', 's']);
This would return the value ['z', 's', 'l', 'h', 'b'].

JavaScript's default sorting method is by string Unicode point value, which may return unexpected results. Therefore, it is encouraged to provide a callback function to specify how to sort the array items. When such a callback function, normally called compareFunction, is supplied, the array elements are sorted according to the return value of the compareFunction: If compareFunction(a,b) returns a value less than 0 for two elements a and b, then a will come before b. If compareFunction(a,b) returns a value greater than 0 for two elements a and b, then b will come before a. If compareFunction(a,b) returns a value equal to 0 for two elements a and b, then a and b will remain unchanged.

Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order.

==================================================================
TESTCASE

Your code should use the sort method.

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]) should return ["a", "a", "c", "d", "g", "z"].

alphabeticalOrder(["x", "h", "a", "m", "n", "m"]) should return ["a", "h", "m", "m", "n", "x"].

alphabeticalOrder(["a", "a", "a", "a", "x", "t"]) should return ["a", "a", "a", "a", "t", "x"].

==================================================================
SETUP

function alphabeticalOrder(arr) {
  // Only change code below this line


  // Only change code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

==================================================================

*/


// 

// Cannot return a > b because false = 0, not -1, so a,b does not change
// cannot return a-b for alphabetical case because return NaN for 2 string, but 2 string can be compare a>b
// The most safe case is if return -1, 1, which can be use for both number and alphabetical value

function alphabeticalOrder(arr) {
  // Only change code below this line
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });
  // Only change code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
console.log('alphabeticalOrder(["a", "d", "c", "a", "z", "g"]):', alphabeticalOrder(["a", "d", "c", "a", "z", "g"]))
