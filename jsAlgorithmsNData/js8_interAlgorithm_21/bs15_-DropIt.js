/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it

==================================================================
DESCRIPTION

Drop it
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

==================================================================
TESTCASE

dropElements([1, 2, 3, 4], function(n) {return n >= 3;} should return [3, 4].

dropElements([0, 1, 0, 1], function(n) {return n === 1;} should return [1, 0, 1].

dropElements([1, 2, 3], function(n) {return n > 0;} should return [1, 2, 3].

dropElements([1, 2, 3, 4], function(n) {return n > 5;} should return [].

dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;} should return [7, 4].

dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;} should return [3, 9, 2].

==================================================================
SETUP

function dropElements(arr, func) {
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; };

==================================================================

*/
// silly solution
// function dropElements2(arr, func) {
//   let arrTemp = [...arr];
//   let indexSplice;
//   do {
//     indexSplice = arrTemp.findIndex((ele) => func(ele));
//     if (indexSplice > 0) {
//       arrTemp.splice(0, indexSplice);
//     }
//   } while (indexSplice > 0);
//   return indexSplice == 0 ? arrTemp : [];
// }
function dropElements(arr, func) {
  let sliceIndex = arr.findIndex(func);
  return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
}
// recursion
function dropElements2(arr, func, i = 0) {
  return i < arr.length && !func(arr[i])
    ? (dropElements2(arr.slice(i + 1), func, i))
    : arr;
}

const dropElementsTest = [
  [
    [1, 2, 3, 4],
    [3, 4],
    function (n) {
      return n >= 3;
    },
  ],
  [
    [0, 1, 0, 1],
    [1, 0, 1],
    function (n) {
      return n === 1;
    },
  ],
  [
    [1, 2, 3],
    [1, 2, 3],
    function (n) {
      return n > 0;
    },
  ],
  [
    [1, 2, 3, 4],
    [],
    function (n) {
      return n > 5;
    },
  ],
  [
    [1, 2, 3, 7, 4],
    [7, 4],
    function (n) {
      return n > 3;
    },
  ],
  [
    [1, 2, 3, 9, 2],
    [3, 9, 2],
    function (n) {
      return n > 2;
    },
  ],
];

import * as varTest from "../pj0_checker.js";
const test = varTest.testSuiteChecker;
const testArgs = [[]];
const showReturn = true;
const oneToOne = false;
const doubleCheck = false;
const callDoubleCheck = () => {};
// Wrapper callback, destruct arguments
const testInput = dropElementsTest; // change this
let callback = dropElements2; // change this
// myReplace(str, before, after)
const wrapCallback = (testInput) => {
  const str = testInput[0];
  const before = testInput[2];
  return callback(str, before);
};
// run command
test(
  testInput,
  testArgs,
  showReturn,
  doubleCheck,
  oneToOne,
  wrapCallback,
  callDoubleCheck
);
