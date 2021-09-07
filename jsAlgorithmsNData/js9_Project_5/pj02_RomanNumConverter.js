/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter

==================================================================
DESCRIPTION

Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

==================================================================
TESTCASE

convertToRoman(2) should return the string II.

convertToRoman(3) should return the string III.

convertToRoman(4) should return the string IV.

convertToRoman(5) should return the string V.

convertToRoman(9) should return the string IX.

convertToRoman(12) should return the string XII.

convertToRoman(16) should return the string XVI.

convertToRoman(29) should return the string XXIX.

convertToRoman(44) should return the string XLIV.

convertToRoman(45) should return the string XLV.

convertToRoman(68) should return the string LXVIII

convertToRoman(83) should return the string LXXXIII

convertToRoman(97) should return the string XCVII

convertToRoman(99) should return the string XCIX

convertToRoman(400) should return the string CD

convertToRoman(500) should return the string D

convertToRoman(501) should return the string DI

convertToRoman(649) should return the string DCXLIX

convertToRoman(798) should return the string DCCXCVIII

convertToRoman(891) should return the string DCCCXCI

convertToRoman(1000) should return the string M

convertToRoman(1004) should return the string MIV

convertToRoman(1006) should return the string MVI

convertToRoman(1023) should return the string MXXIII

convertToRoman(2014) should return the string MMXIV

convertToRoman(3999) should return the string MMMCMXCIX

==================================================================
SETUP

function convertToRoman(num) {
 return num;
}

convertToRoman(36);

==================================================================

*/
// const romanLookup = [
//   ["M", 1000],
//   ["CM", 900],
//   ["D", 500],
//   ["CD", 400],
//   ["C", 100],
//   ["XC", 90],
//   ["L", 50],
//   ["XL", 40],
//   ["X", 10],
//   ["IX", 9],
//   ["V", 5],
//   ["IV", 4],
//   ["I", 1],
// ];

const numToRomanLookup = [
  [1, "I"],
  [4, "IV"],
  [5, "V"],
  [9, "IX"],
  [10, "X"],
  [40, "XL"],
  [50, "L"],
  [90, "XC"],
  [100, "C"],
  [400, "CD"],
  [500, "D"],
  [900, "CM"],
  [1000, "M"],
];

// sort descending
numToRomanLookup.sort(([val1], [val2]) => val2 - val1)

function convertToRoman(num) {
  let romanStr = "";
  if (num >= 4000) {
    return false;
  }
  while (num > 0) {
    let [value, str] = numToRomanLookup.find(([val]) => num >= val);
    romanStr += str;
    num = num - value;
  }
  return romanStr;
}

const convertToRomanTest = [
  [1, "I"],
  [4, "IV"],
  [5, "V"],
  [9, "IX"],
  [400, "CD"],
  [500, "D"],
  [1000, "M"],

  [2, "II"],
  [8, "VIII"],
  [36, "XXXVI"],
  [12, "XII"],

  [3, "III"],
  [16, "XVI"],
  [29, "XXIX"],
  [44, "XLIV"],
  [45, "XLV"],
  [68, "LXVIII"],
  [83, "LXXXIII"],
  [97, "XCVII"],
  [99, "XCIX"],
  [501, "DI"],
  [649, "DCXLIX"],
  [798, "DCCXCVIII"],
  [891, "DCCCXCI"],

  [1004, "MIV"],
  [1006, "MVI"],
  [1023, "MXXIII"],
  [2014, "MMXIV"],
  [3999, "MMMCMXCIX"],
  [4000, false],
];
// https://blog.prepscholar.com/roman-numerals-converter
import * as varTest from "../pj0_checker.js";
const test = varTest.testSuiteChecker;
const testArgs = [[]];
const showReturn = false;
const oneToOne = false;
const doubleCheck = false;
const callDoubleCheck = () => {};
// Wrapper callback, destruct arguments
const testInput = convertToRomanTest; // change this
let callback = convertToRoman; // change this
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
