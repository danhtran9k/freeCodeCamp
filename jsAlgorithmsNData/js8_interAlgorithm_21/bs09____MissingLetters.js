/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters

==================================================================
DESCRIPTION

Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined

==================================================================
TESTCASE

fearNotLetter("abce") should return the string d.

fearNotLetter("abcdefghjklmno") should return the string i.

fearNotLetter("stvwx") should return the string u.

fearNotLetter("bcdf") should return the string e.

fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.

==================================================================
SETUP

function fearNotLetter(str) {
  return str;
}

fearNotLetter("abce");

==================================================================

*/

function fearNotLetter(str) {
  const startChart = str.charCodeAt(0);
  const endChar = str.charCodeAt(str.length - 1);
  for (let index = startChart; index < endChar; index++) {
    let charSearch = String.fromCodePoint(index);
    if (!str.includes(charSearch)) {
      return charSearch;
    }
  }
  return undefined;
}

function fearNotLetter2(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}
// create new regex
function fearNotLetter3(str) {
  var allChars = "";
  var notChars = new RegExp("[^" + str + "]", "g");

  for (var i = 0; allChars[allChars.length - 1] !== str[str.length - 1]; i++)
    allChars += String.fromCharCode(str[0].charCodeAt(0) + i);

  return allChars.match(notChars)
    ? allChars.match(notChars).join("")
    : undefined;
}

const fearLetterTest = [
  ["abce", "d"],
  ["abcdefghjklmno", "i"],
  ["stvwx", "u"],
  ["bcdf", "e"],
  ["abcdefghijklmnopqrstuvwxyz", undefined],
];

import * as varTest from "../pj0_checker.js";
const test = varTest.testSuiteChecker;
const testArgs = [[]];
const showReturn = true;
const oneToOne = false;
const doubleCheck = false;
const callDoubleCheck = () => {};
// Wrapper callback, destruct arguments
const testInput = fearLetterTest; // change this
let callback = fearNotLetter3; // change this
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
