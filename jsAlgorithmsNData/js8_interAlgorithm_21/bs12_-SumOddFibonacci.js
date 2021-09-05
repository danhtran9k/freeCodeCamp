/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers

==================================================================
DESCRIPTION

Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

==================================================================
TESTCASE

sumFibs(1) should return a number.

sumFibs(1000) should return 1785.

sumFibs(4000000) should return 4613732.

sumFibs(4) should return 5.

sumFibs(75024) should return 60696.

sumFibs(75025) should return 135721.

==================================================================
SETUP

function sumFibs(num) {
  return num;
}

sumFibs(4);

==================================================================

*/
// mysol
function sumFibs2(num) {
  let fibsObj = {
    "n-2": 1,
    "n-1": 1,
    sum: 2,
  };
  while (fibsObj["n-1"] <= num) {
    let tempFibs = fibsObj["n-2"] + fibsObj["n-1"];
    if (tempFibs <= num && tempFibs % 2 == 1) {
      fibsObj.sum += tempFibs;
    }
    fibsObj["n-2"] = fibsObj["n-1"];
    fibsObj["n-1"] = tempFibs;
  }
  return fibsObj.sum;
}

function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

const sumFibsTest = [
  [1, 2],
  [2, 2],
  [3, 5],
  [4, 5],
  [10, 10],
  [1000, 1785],
  [4000000, 4613732],
  [75024, 60696],
  [75025, 135721],
];
import * as varTest from "../pj0_checker.js";
const test = varTest.testSuiteChecker;
const testArgs = [[]];
const showReturn = true;
const oneToOne = false;
const doubleCheck = false;
const callDoubleCheck = () => {};
// Wrapper callback, destruct arguments
const testInput = sumFibsTest; // change this
let callback = sumFibs; // change this
// myReplace(str, before, after)
const wrapCallback = (testInput) => {
  const str = testInput[0];
  const before = testInput[2];
  const after = testInput[3];
  return callback(str, before, after);
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
