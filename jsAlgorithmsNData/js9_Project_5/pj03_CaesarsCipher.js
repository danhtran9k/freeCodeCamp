/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher

==================================================================
DESCRIPTION

Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

==================================================================
TESTCASE

rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP

rot13("SERR CVMMN!") should decode to the string FREE PIZZA!

rot13("SERR YBIR?") should decode to the string FREE LOVE?

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

==================================================================
SETUP

function rot13(str) {

  return str;
}

rot13("SERR PBQR PNZC");

==================================================================

*/

function rot13(str) {
  let decodeStr = "";
  for (const char of str) {
    const regexChar = /[A-Za-z]/;
    let shift13 = char.charCodeAt(0) + 13;
    let checkRange = (shift13 > 90 && shift13 <= 103) || shift13 > 122;
    let shiftCharCode = checkRange ? shift13 - 26 : shift13;
    decodeStr += regexChar.test(char)
      ? String.fromCharCode(shiftCharCode)
      : char;
  }
  return decodeStr;
}

function rot132(str) {
  var input = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var output = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
  var index = (x) => input.indexOf(x);
  var translate = (x) => (index(x) > -1 ? output[index(x)] : x);
  return str.split("").map(translate).join("");
}

let rot13Test = [
  ["a!H.A0a*", "n!U.N0n*"],
  ["aHAa@", "nUNn@"],
  // ["SERR PBQR PNZC", "FREE CODE CAMP"],
  // ["SERR CVMMN!", "FREE PIZZA!"],
  // ["SERR YBIR?", "FREE LOVE?"],
  // [
  //   "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.",
  //   "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.",
  // ],
  // [
  //   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  //   'NOPQRSTUVWXYZABCDEFGHIJKLM',
  // ],
  // [
  //   "abcdefghijklmnopqrstuvwxyz",
  //   "nopqrstuvwxyzabcdefghijklm",
  // ],
  [
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm",
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
const testInput = rot13Test; // change this
let callback = rot13; // change this
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
