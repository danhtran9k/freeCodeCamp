/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/binary-agents

==================================================================
DESCRIPTION

Binary Agents
Return an English translated sentence of the passed binary string.

The binary string will be space separated.

==================================================================
TESTCASE

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") should return the string Aren't bonfires fun!?

binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") should return the string I love FreeCodeCamp!

==================================================================
SETUP

function binaryAgent(str) {
  return str;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

==================================================================

*/

function binaryAgent(str) {
  return str
    .split(" ")
    .map((bin) => String.fromCharCode(parseInt(bin, 2)))
    .join("");
}

const binaryAgentTest = [
  [
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111",
    "Aren't bonfires fun!?",
  ],

  [
    "01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001",
    "I love FreeCodeCamp!",
  ],
  [
    "1010011 1110100 1100001 1100011 1101011 1001111 1110110 1100101 1110010 1100110 1101100 1101111 1110111",
    "StackOverflow",
  ],
];

// ================================================
// get the charcode (10 base),transform it back to a string (2 base)
function strToBinary(str) {
  return str
    .split("")
    .map(
      (c) =>
        "0".repeat(8 - c.charCodeAt(0).toString(2).length) +
        c.charCodeAt(0).toString(2)
    )
    .join(" ");
}
const strToBinaryTest = [
  [
    "StackOverflow",
    "1010011 1110100 1100001 1100011 1101011 1001111 1110110 1100101 1110010 1100110 1101100 1101111 1110111",
  ],
  ["I love", "01001001 00100000 01101100 01101111 01110110 01100101"],
  [
    "Aren't bonfires fun!?",
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111",
  ],

  [
    "I love FreeCodeCamp!",
    "01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001",
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
const testInput = strToBinaryTest; // change this
let callback = strToBinary; // change this
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
