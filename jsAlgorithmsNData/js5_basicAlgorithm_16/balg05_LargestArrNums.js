/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays

==================================================================
DESCRIPTION

Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

==================================================================
TESTCASE

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27, 5, 39, 1001].

largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]) should return [25, 48, 21, -3].

==================================================================
SETUP

function largestOfFour(arr) {
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

==================================================================

*/

// function largestOfFour(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let largestNum = arr[i][0];
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] > largestNum) {
//         largestNum = arr[i][j];
//         // console.log(largestNum);
//       }
//     }
//     newArr.push(largestNum);
//     // newArr[i] = largestNum;
//   }
//   return newArr;
// }

function largestOfFour(arr) {
  return arr.map((subArr) =>
    subArr.reduce((prev, curr) => (curr > prev) ? curr : prev)
  );
}

// no math module  Math.max(prev, curr)
// (curr > prev) ? curr : prev
let arr = largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
console.log(arr);
