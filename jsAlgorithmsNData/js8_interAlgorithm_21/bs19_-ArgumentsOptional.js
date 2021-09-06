/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional

==================================================================
DESCRIPTION

Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.



==================================================================
TESTCASE

addTogether(2, 3) should return 5.

addTogether(23, 30) should return 53.

addTogether(5)(7) should return 12.

addTogether("http://bit.ly/IqT6zt") should return undefined.

addTogether(2, "3") should return undefined.

addTogether(2)([3]) should return undefined.

==================================================================
SETUP

function addTogether() {
  return false;
}

addTogether(2,3);

==================================================================

*/

function addTogether() {
  //Variable and subroutine declaration (optional, but makes code cleaner)
  var args = arguments;
  var a = args[0];
  var b = args[1];
  function isNum(num) {
    return Number.isInteger(num);
  }

  //Actual program: relies on implicit return of 'undefined'
  //Note: while refactoring I remove curly braces if not required
  if (isNum(a)) {
    if (isNum(b)) return a + b;
    else if (!b)
      return function (b) {
        if (isNum(b)) return a + b;
      };
  }
}
// recursive sol
function addTogether2() {
  const [a, b] = arguments;

  if (typeof a !== "number" || (b && typeof b !== "number")) {
    return undefined;
  }

  if (b) {
    return a + b;
  }

  return (c) => addTogether2(a, c);
}

function addTogether3(a, b) {
  if (![...arguments].every((arg) => typeof arg === "number")) {
    return;
  }
  if (b) {
    return a + b;
  } else {
    return function (y, x = a) {
      return addTogether(y, x);
    };
  }
}

const addTogetherTest = [
  [addTogether3(2, 3), 5],

  [addTogether3(23, 30), 53],

  [addTogether3(5)(7), 12],

  [addTogether3(2, "3"), undefined],

  [addTogether3(2)([3]), undefined],

  [addTogether3("http://bit.ly/IqT6zt"), undefined],
  // Special bug test case - not included in fcc
  // comment this test case to run
  // [addTogether("string")(3), undefined],
];

import * as varTest from "../pj0_checker.js";
const test = varTest.testSuiteChecker;
const testArgs = [[]];
const showReturn = true;
const oneToOne = false;
const doubleCheck = false;
const callDoubleCheck = () => {};
// Wrapper callback, destruct arguments
const testInput = addTogetherTest;
const wrapCallback = (testInput) => {
  return testInput[0];
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
