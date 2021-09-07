/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union

==================================================================
DESCRIPTION

Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

==================================================================
TESTCASE

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].

uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].

==================================================================
SETUP

function uniteUnique(arr) {
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

==================================================================

*/

function uniteUnique(arr) {
  return [...arguments].flat().reduce((arr, ele) => {
    return !arr.includes(ele) ? arr.concat(ele) : arr;
  }, []);
}
// Index operative, same value will return the first index match
function uniteUnique2 (...arr) {return arr.flat().filter((a, b, c) => c.indexOf(a) == b)}
// Set operation create new unique value
const uniteUnique3 = (...arr) => [...new Set(arr.flat())]

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
