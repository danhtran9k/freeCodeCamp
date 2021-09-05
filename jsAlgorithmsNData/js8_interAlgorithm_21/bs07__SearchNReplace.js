/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace

==================================================================
DESCRIPTION

Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog



==================================================================
TESTCASE

myReplace("Let us go to the store", "store", "mall") should return the string Let us go to the mall.

myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return the string He is Sitting on the couch.

myReplace("I think we should look up there", "up", "Down") should return the string I think we should look down there.

myReplace("This has a spellngi error", "spellngi", "spelling") should return the string This has a spelling error.

myReplace("His name is Tom", "Tom", "john") should return the string His name is John.

myReplace("Let us get back to more Coding", "Coding", "algorithms") should return the string Let us get back to more Algorithms.

==================================================================
SETUP

function myReplace(str, before, after) {
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

==================================================================

*/

function myReplace(str, before, after) {
  let isTitleCase = /^[A-Z]/.test(before);
  after =
    (isTitleCase ? after[0].toUpperCase() : after[0].toLowerCase()) +
    after.slice(1);
  return str.replace(before, after);
}




const myReplaceTest = [
  ["Let us go to the store", "Let us go to the mall", "store", "mall"],
  [
    "He is Sleeping on the couch",
    "He is Sitting on the couch",
    "Sleeping",
    "sitting",
  ],
  [
    "I think we should look up there",
    "I think we should look down there",
    "up",
    "Down",
  ],
  [
    "This has a spellngi error",
    "This has a spelling error",
    "spellngi",
    "spelling",
  ],
  ["His name is Tom", "His name is John", "Tom", "john"],
  [
    "Let us get back to more Coding",
    "Let us get back to more Algorithms",
    "Coding",
    "algorithms",
  ],
  ["the store", "the mall", "store", "Mall"],
  // ["A Store", "A Mall", "store", "Mall"], // wrong test-case
];

import * as varTest from "../pj0_checker.js";
const test = varTest.testSuiteChecker;
const testArgs = [[]];
const showReturn = true;
const oneToOne = false;
const doubleCheck = false;
const callDoubleCheck = () => {};
// Wrapper callback, destruct arguments
const testInput = myReplaceTest; // change this
let callback = myReplace5; // change this
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
