/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey

==================================================================
DESCRIPTION

Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

==================================================================
TESTCASE

chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].

==================================================================
SETUP

function chunkArrayInGroups(arr, size) {
  return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

==================================================================

*/

function chunkArrayInGroups(arr, size) {
  // console.log("🚀 ~ file: bs16_-ChunkyMonkey.js ~ line 56 ~ chunkArrayInGroups ~ arr.slice(arr.length - size)", arr.slice(arr.length - size))
  // console.log("🚀 ~ file: bs16_-ChunkyMonkey.js ~ line 56 ~ chunkArrayInGroups ~  arr.slice(0, arr.length - size)",  arr.slice(0, arr.length - size))
  return arr.length <= size
    ? [arr]
    : [arr.slice(0, size)].concat(chunkArrayInGroups(arr.slice(size), size));
}

// sol2
// function chunkArrayInGroups(arr, size) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i += size) {

//     newArr.push(arr.slice(i, i + size));
//   }
//   return newArr;
// }
chunkArrayInGroups(["a", "b", "c", "d"], 2);
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
