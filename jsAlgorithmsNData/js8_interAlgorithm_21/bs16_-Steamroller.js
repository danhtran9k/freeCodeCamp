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
// my sol
function steamrollArray(arr) {
  let arrFlat = [];
  arr.forEach((ele) => {
    if (Array.isArray(ele)) {
      arrFlat.push(...steamrollArray(ele));
    } else {
      arrFlat.push(ele);
    }
  });
  return arrFlat;
}
// sol 2, some
function steamrollArray2(arr) {
  const flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}
// sol 3, arr --> str --> arr flat

const steamrollArrayTest = [
  [
    [[["a"]], [["b"]]],
    ["a", "b"],
  ],

  [
    [1, [2], [3, [[4]]]],
    [1, 2, 3, 4],
  ],

  [
    [1, [], [3, [[4]]]],
    [1, 3, 4],
  ],
  [
    [1, {}, [3, [[4]]]],
    [1, {}, 3, 4],
  ],
  [
    [1, { "st-ri ng": '"str,i,,ng"', num: 23 }, [false, [[4]]]],
    [1, { "st-ri ng": '"str,i,,ng"', num: 23 }, false, 4],
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
const testInput = steamrollArrayTest; // change this
let callback = steamrollArray; // change this
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
