/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range

==================================================================
DESCRIPTION

Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.



==================================================================
TESTCASE

sumAll([1, 4]) should return a number.

sumAll([1, 4]) should return 10.

sumAll([4, 1]) should return 10.

sumAll([5, 10]) should return 45.

sumAll([10, 5]) should return 45.

==================================================================
SETUP

function sumAll(arr) {
  return 1;
}

sumAll([1, 4]);

==================================================================

*/
function sumAll(arr) {
  let max = Math.max(arr[1], arr[0])
  let min = Math.min(arr[1], arr[0])
  let sum = 0;
  for (let index = min; index <= max; index++) {
    sum = sum + index
  }
  return sum;
}

// Shorter sol
// function sumAll(arr) {
//   let sumBetween = 0;
//   for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
//     sumBetween += i;
//   }
//   return sumBetween;
// }
// Recursion sol
// function sumAll(arr) {
//   const [first, last] = [...arr].sort((a, b) => a - b);
//   return first !== last
//     ? first + sumAll([first + 1, last])
//     : first;
// }

sumAll([1, 4]);
