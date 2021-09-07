/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing

==================================================================
DESCRIPTION

DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.



==================================================================
TESTCASE

pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].

pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].

pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].

==================================================================
SETUP

function pairElement(str) {
  return str;
}

pairElement("GCG");

==================================================================

*/
const mapDNA = {
  A: "T",
  T: "A",
  C: "G",
  G: "C",
};
function pairElement(str) {
  return str.split("").map((ele) => [ele, mapDNA[ele]]);
}

// pairElement("GCG");
// TestSuite will not work with array obj result
const pairElementTest = [
  [
    "ATCGA",
    [
      ["A", "T"],
      ["T", "A"],
      ["C", "G"],
      ["G", "C"],
      ["A", "T"],
    ],
  ],
  [
    "TTGAG",
    [
      ["T", "A"],
      ["T", "A"],
      ["G", "C"],
      ["A", "T"],
      ["G", "C"],
    ],
  ],
  [
    "CTCTA",
    [
      ["C", "G"],
      ["T", "A"],
      ["C", "G"],
      ["T", "A"],
      ["A", "T"],
    ],
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
const testInput = pairElementTest; // change this
let callback = pairElement; // change this
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
