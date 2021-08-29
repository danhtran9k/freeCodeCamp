/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/remove-whitespace-from-start-and-end

==================================================================
DESCRIPTION

Remove Whitespace from Start and End
Sometimes whitespace characters around strings are not wanted but are there. Typical processing of strings is to remove the whitespace at the start and end of it.

Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.

Note: The String.prototype.trim() method would work here, but you'll need to complete this challenge using regular expressions.



==================================================================
TESTCASE

result should be equal to the string Hello, World!

Your solution should not use the String.prototype.trim() method.

The result variable should not directly be set to a string

==================================================================
SETUP

let hello = "   Hello, World!  ";
let wsRegex = /change/; // Change this line
let result = hello; // Change this line

==================================================================

*/

// import {checkRegexReplace} from './a0_RegexSummary.js';
import * as regexReplace from "./a0_RegexSummary.js";
// const regexReplace = require('./a0_RegexSummary.js');

const showMatching = true;
// const arrRegexObjKey = ["regexSyntax", "regexComment", "replace"];
const arrRegex = [
  [/^(\s+)(\S.*\S)(\s+)$/, "my sol", "$2"],
  [/^\s+|\s+$/g, "fcc sol", ""],
];
// const arrStrObjKey = ["strTest", "correctTestResult", "strComment"];
const arrStr = [["   Hello, World!  ", "Hello, World!", ""]];

let hello = "   Hello, World!  ";
let wsRegex = /change/; // Change this line
let result = hello; // Change this line
regexReplace.checkRegexReplace(arrStr, arrRegex, showMatching);
// checkRegexReplace(arrStr, arrRegex, showMatching)
