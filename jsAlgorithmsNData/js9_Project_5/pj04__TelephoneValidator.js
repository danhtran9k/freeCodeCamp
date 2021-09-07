/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator

==================================================================
DESCRIPTION

Telephone Number Validator
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.



==================================================================
TESTCASE

telephoneCheck("555-555-5555") should return a boolean.


telephoneCheck("1 555-555-5555") should return true.
telephoneCheck("1 (555) 555-5555") should return true.
telephoneCheck("5555555555") should return true.
telephoneCheck("555-555-5555") should return true.
telephoneCheck("(555)555-5555") should return true.
telephoneCheck("1(555)555-5555") should return true.
telephoneCheck("1 555 555 5555") should return true.

telephoneCheck("1 456 789 4444") should return true.

telephoneCheck("555-5555") should return false.

telephoneCheck("5555555") should return false.

telephoneCheck("1 555)555-5555") should return false.

telephoneCheck("123**&!!asdf#") should return false.

telephoneCheck("55555555") should return false.

telephoneCheck("(6054756961)") should return false.

telephoneCheck("2 (757) 622-7382") should return false.

telephoneCheck("0 (757) 622-7382") should return false.

telephoneCheck("-1 (757) 622-7382") should return false.

telephoneCheck("2 757 622-7382") should return false.

telephoneCheck("10 (757) 622-7382") should return false.

telephoneCheck("27576227382") should return false.

telephoneCheck("(275)76227382") should return false.

telephoneCheck("2(757)6227382") should return false.

telephoneCheck("2(757)622-7382") should return false.

telephoneCheck("555)-555-5555") should return false.

telephoneCheck("(555-555-5555") should return false.

telephoneCheck("(555)5(55?)-5555") should return false.

telephoneCheck("55 55-55-555-5") should return false.

==================================================================
SETUP

function telephoneCheck(str) {
  return true;
}

telephoneCheck("555-555-5555");

==================================================================

*/
function telephoneCheck(str) {
  const regexDigit = /\d/g;
  const invalidChar = /[^\d-\(\) ]/;
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  let numValid;
  const digitNum = str.match(regexDigit).length;
  if (invalidChar.test(str)) {
    console.log("invalidChar.test(str)");
    numValid = false;
    return numValid;
  }
  if (digitNum > 11 || digitNum < 10) {
    console.log("digitNum > 11 || digitNum < 10");
    numValid = false;
    return numValid;
  }
  if (digitNum == 11 && str[0] != "1") {
    console.log('digitNum == 11 && str[0] != "1"');
    numValid = false;
    return numValid;
  }
  if (regex.test(str)) {
    console.log("pass regex check");
    numValid = true;
    return numValid;
  } else {
    console.log("Wrong format ❗❗❗");
    numValid = false;
    return numValid;
  }

  // return numValid;
}
// best sol, but becareful for own test-case
function telephoneCheck2(str) {
  let rex1 = /^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/;
  let rex2 = /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/;

  if (rex1.test(str)) {
    console.log("rex 1, no parenthesis cases");
    return true;
  }
  // return rex2.test(str) ? true : false;
  if (rex2.test(str)) {
    console.log("rex2 correct parenthesis");
    return true;
  } else {
    console.log("else false");
    return false;
  }
}
// fcc sol
function telephoneCheck3(str) {
  let regexFcc = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  if (regexFcc.test(str)) {
    return true;
  } else {
    return false;
  }
}
const myRegex = /^(1\s?)? [-\s]?d{3}[-\s]?\d{4}$/;
const telephoneCheckTest = [
  // 11 digit, not start with 1
  ["2 (757) 622-7382", false],
  ["0 (757) 622-7382", false],
  ["-1 (757) 622-7382", false],
  ["2 757 622-7382", false],
  ["27576227382", false],
  ["(275)76227382", false],
  ["2(757)6227382", false],
  ["2(757)622-7382", false],

  // not 10 or 11 digit
  ["10 (757) 622-7382", false],
  ["555-5555", false],
  ["5555555", false],
  ["55555555", false],

  // invalid char
  ["123**&!!asdf#", false],
  ["123**&!!adf#4567890", false],
  ["(555)5(55?)-5555", false],

  //  wrong parenthesis (), wrong -
  ["1 555)555-5555", false],
  ["555)-555-5555", false],
  ["(555-555-5555", false],
  ["55 55-55-555-5", false],
  ["(6054756961)", false],

  // 11 digit, start with 1, correct special char
  ["1 555 555 5555", true],
  ["1 555-555-5555", true],
  ["1 456 789 4444", true],
  ["1 (555) 555-5555", true],
  ["1(555)555-5555", true],

  // 10 digit, correct special char
  ["(555)555-5555", true],
  ["5555555555", true],
  ["555-555-5555", true],

  // // my test cases
  // // [" ",true],
  // ["(123) 456 7890", true],
  // ["(555) 555-5555", true],
  // // [" ",false],
  // ["(555)5(55)-5555", false],
  // ["(555) 555 5555", false],

  // ["(123)-456 7890", false],
  // ["123 456-7890", false],
  // ["123-456 7890", false],
];

import * as varTest from "../pj0_checker.js";
const test = varTest.testSuiteChecker;
const testArgs = [[]];
const showReturn = false;
const oneToOne = false;
const doubleCheck = false;
const callDoubleCheck = () => {};
// Wrapper callback, destruct arguments
const testInput = telephoneCheckTest; // change this
let callback = telephoneCheck; // change this
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
