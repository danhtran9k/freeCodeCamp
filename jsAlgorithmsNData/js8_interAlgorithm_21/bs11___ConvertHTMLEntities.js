/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities

==================================================================
DESCRIPTION

Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

==================================================================
TESTCASE

convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.

convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos.

convertHTML("Sixty > twelve") should return the string Sixty &gt; twelve.

convertHTML('Stuff in "quotation marks"') should return the string Stuff in &quot;quotation marks&quot;.

convertHTML("Schindler's List") should return the string Schindler&apos;s List.

convertHTML("<>") should return the string &lt;&gt;.

convertHTML("abc") should return the string abc.

==================================================================
SETUP

function convertHTML(str) {
  return str;
}

convertHTML("Dolce & Gabbana");

==================================================================

*/

const htmlEntities = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
};
const regexSpecialChar = /([&<>\"'])/g;

// String replace unsage
function convertHTML(str) {
  return str.replace(/([&<>\"'])/g, (match) => htmlEntities[match]);
}
// short-circuit evaluation to return default value (itselfif is non special char in this case)
const convertHTML2 = (str) =>
  str
    .split("")
    .map((entity) => htmlEntities[entity] || entity)
    .join("");

const convertHTMLTest = [
  ["Dolce & Gabbana", "Dolce &amp; Gabbana"],
  ["Hamburgers < Pizza < Tacos", "Hamburgers &lt; Pizza &lt; Tacos"],
  ["Sixty > twelve", "Sixty &gt; twelve"],
  ['Stuff in "quotation marks"', "Stuff in &quot;quotation marks&quot;"],
  ["Schindler's List", "Schindler&apos;s List"],
  ["<>", "&lt;&gt;"],
  ["abc", "abc"],
];

import * as varTest from "../pj0_checker.js";
const test = varTest.testSuiteChecker;
const testArgs = [[]];
const showReturn = true;
const oneToOne = false;
const doubleCheck = false;
const callDoubleCheck = () => {};
// Wrapper callback, destruct arguments
const testInput = convertHTMLTest; // change this
let callback = convertHTML2; // change this
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
