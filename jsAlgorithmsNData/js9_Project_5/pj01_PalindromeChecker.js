/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker

==================================================================
DESCRIPTION

Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

==================================================================
TESTCASE

palindrome("eye") should return a boolean.

palindrome("eye") should return true.

palindrome("_eye") should return true.

palindrome("race car") should return true.

palindrome("not a palindrome") should return false.

palindrome("A man, a plan, a canal. Panama") should return true.

palindrome("never odd or even") should return true.

palindrome("nope") should return false.

palindrome("almostomla") should return false.

palindrome("My age is 0, 0 si ega ym.") should return true.

palindrome("1 eye for of 1 eye.") should return false.

palindrome("0_0 (: /-\ :) 0-0") should return true.

palindrome("five|\_/|four") should return false.

==================================================================
SETUP

function palindrome(str) {
  return true;
}



palindrome("eye");

==================================================================

*/

function palindrome(str) {
  const regexRemoveSpecial = /[^a-zA-Z0-9]/g;
  const plainStr = str.replace(regexRemoveSpecial, "").toLowerCase();
  let palindromeArr = [];
  plainStr.split("").forEach((ele) => palindromeArr.unshift(ele));
  return palindromeArr.join("") === plainStr;
}

const palindromeTest = [
  ["eye", true],

  ["_eye", true],

  ["race car", true],

  ["not a palindrome", false],

  ["A man, a plan, a canal. Panama", true],

  ["never odd or even", true],

  ["nope", false],

  ["almostomla", false],

  ["My age is 0, 0 si ega ym.", true],

  ["1 eye for of 1 eye.", false],

  ["0_0 (: /- :) 0-0", true],

  ["five|_/|four", false],
];

import * as varTest from "../pj0_checker.js";
const test = varTest.testSuiteChecker;
const testArgs = [[]];
const showReturn = true;
const oneToOne = false;
const doubleCheck = false;
const callDoubleCheck = () => {};
// Wrapper callback, destruct arguments
const testInput = palindromeTest; // change this
let callback = palindrome; // change this
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
