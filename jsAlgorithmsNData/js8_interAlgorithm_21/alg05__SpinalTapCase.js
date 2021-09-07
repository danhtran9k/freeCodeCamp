/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case

==================================================================
DESCRIPTION

Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.



==================================================================
TESTCASE

spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap.

spinalCase("thisIsSpinalTap") should return the string this-is-spinal-tap.

spinalCase("The_Andy_Griffith_Show") should return the string the-andy-griffith-show.

spinalCase("Teletubbies say Eh-oh") should return the string teletubbies-say-eh-oh.

spinalCase("AllThe-small Things") should return the string all-the-small-things.

==================================================================
SETUP

function spinalCase(str) {
  return str;
}

spinalCase('This Is Spinal Tap');

==================================================================

*/

function spinalCase(str) {
  // my sol
  // const arrFinal = str.split(/\W|_/).reduce((arr, ele) => {
  //   return ele !== "" ? arr.concat(...ele.split(/(?=[A-Z])/)) : arr;
  // }, []);
  // return arrFinal.join("-").toLowerCase();
  // Replace low-upper case to low-space-uppercase
  // fcc sol3, same idea, better regex syntax
  return str
    .split(/\s+|_+|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
  //
}

function spinalCaseSol2(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  // Replace space and underscore with -
  return str.replace(regex, "-").toLowerCase();
}

function spinalCaseSol3(str) {
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  // Split on whitespace and underscores and join with dash
  return str
    .toLowerCase()
    .split(/(?:_| )+/)
    .join("-");
}

// test here
spinalCase("This Is Spinal Tap");
// spinalCase('AllThe   Space');

//  Setup test
const arrSpinalTest = [
  ["This Is Spinal Tap", "this-is-spinal-tap"],
  ["The_Andy_Griffith_Show", "the-andy-griffith-show"],
  ["Teletubbies say Eh-oh", "teletubbies-say-eh-oh"],
  ["AllThe-small Things", "all-the-small-things"],
  ["AllThe   Space", "all-the-space"],
  ["AllTheSmall  Space", "all-the-small-space"],
];

import * as varTest from "../pj0_checker.js";
const test = varTest.testSuiteChecker;
const testInput = arrSpinalTest;
const testArgs = [[]];
const showReturn = true;
const oneToOne = false;
const doubleCheck = false;
const callDoubleCheck = () => {};
// Wrapper callback, destruct arguments
let callback = spinalCase;
const wrapCallback = (testInput) => {
  const str = testInput[0];
  return callback(str);
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
