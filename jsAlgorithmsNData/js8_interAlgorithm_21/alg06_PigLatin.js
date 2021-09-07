/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin

==================================================================
DESCRIPTION

Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

==================================================================
TESTCASE

translatePigLatin("california") should return the string aliforniacay.

translatePigLatin("paragraphs") should return the string aragraphspay.

translatePigLatin("glove") should return the string oveglay.

translatePigLatin("algorithm") should return the string algorithmway.

translatePigLatin("eight") should return the string eightway.

Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return the string artzschway.

Should handle words without vowels. translatePigLatin("rhythm") should return the string rhythmay.

==================================================================
SETUP

function translatePigLatin(str) {
  return str;
}

translatePigLatin("consonant");

==================================================================

*/
// mySol
function translatePigLatin(str) {
  let vowelRegex = /[aeiou]/;
  let indexFirstVowel = str.indexOf(str.match(vowelRegex));
  return indexFirstVowel === 0
    ? str + "way"
    : indexFirstVowel === -1
    ? str + "ay"
    : str.slice(indexFirstVowel) + str.slice(0, indexFirstVowel) + "ay";
}

function translatePigLatinSol1(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str.replace(consonantRegex, "").concat(myConsonants).concat("ay")
    : str.concat("way");
}

function translatePigLatinSol2(str) {
  if (str.match(/^[aeiou]/)) return str + "way";
  const consonantCluster = str.match(/^[^aeiou]+/)[0];
  return str.substring(consonantCluster.length) + consonantCluster + "ay";
}

function translatePigLatinSol3(str) {
  return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}
// Use wrapp
function translatePigLatinSol4(str, charPos = 0) {
  return ['a', 'e', 'i', 'o', 'u'].includes(str[0])
    ? str + (charPos === 0 ? 'way' : 'ay')
    : charPos === str.length
      ? str + 'ay'
      : translatePigLatinSol4(str.slice(1) + str[0], charPos + 1);
}

// translatePigLatin("consonant");
// console.log(translatePigLatin("consonant"))
// translatePigLatin("rhythm");
// console.log(translatePigLatin("rhythm"));

const pigLatinTest = [
  ["california", "aliforniacay"],
  ["paragraphs", "aragraphspay"],
  ["glove", "oveglay"],
  ["algorithm", "algorithmway"],
  ["eight", "eightway"],
  ["schwartz", "artzschway"],
  ["rhythm", "rhythmay"],
];

import * as varTest from "../pj0_checker.js";
const test = varTest.testSuiteChecker;
const testArgs = [[]];
const showReturn = true;
const oneToOne = false;
const doubleCheck = false;
const callDoubleCheck = () => {};
// Wrapper callback, destruct arguments
const testInput = pigLatinTest; // change this
let callback = translatePigLatinSol4; // change this
// myReplace(str, before, after)
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
