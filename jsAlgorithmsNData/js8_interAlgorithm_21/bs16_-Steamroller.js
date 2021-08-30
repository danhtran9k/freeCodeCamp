/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller

==================================================================
DESCRIPTION

Steamroller
Flatten a nested array. You must account for varying levels of nesting.

==================================================================
TESTCASE

steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].

steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].

steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].

steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].

Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.

==================================================================
SETUP

function steamrollArray(arr) {
  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);

==================================================================

*/


