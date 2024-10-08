/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/reuse-patterns-using-capture-groups

==================================================================
DESCRIPTION

Reuse Patterns Using Capture Groups
Say you want to match a word that occurs multiple times like below.

let repeatStr = "row row row your boat";
You could use /row row row/, but what if you don't know the specific word repeated? Capture groups can be used to find repeated substrings.

Capture groups are constructed by enclosing the regex pattern to be captured in parentheses. In this case, the goal is to capture a word consisting of alphanumeric characters so the capture group will be \w+ enclosed by parentheses: /(\w+)/.

The substring matched by the group is saved to a temporary "variable", which can be accessed within the same regex using a backslash and the number of the capture group (e.g. \1). Capture groups are automatically numbered by the position of their opening parentheses (left to right), starting at 1.

The example below matches a word that occurs thrice separated by spaces:

let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]
Using the .match() method on a string will return an array with the matched substring, along with its captured groups.

Use capture groups in reRegex to match a string that consists of only the same number repeated exactly three times separated by single spaces.



==================================================================
TESTCASE

Your regex should use the shorthand character class for digits.

Your regex should reuse a capture group twice.

Your regex should match the string 42 42 42.

Your regex should match the string 100 100 100.

Your regex should not match the string 42 42 42 42.

Your regex should not match the string 42 42.

Your regex should not match the string 101 102 103.

Your regex should not match the string 1 2 3.

Your regex should match the string 10 10 10.

==================================================================
SETUP

let repeatNum = "42 42 42";
let reRegex = /change/; // Change this line
let result = reRegex.test(repeatNum);

==================================================================

*/

let repeatNum = "42 42 42 42";
let reRegex = /^(\d+) \1 \1$/; // Change this line
let result = console.log("reRegex.test(repeatNum):", reRegex.test(repeatNum));

let falseRepeatNum = "42 42 42 42";
let wrongRegex = /(\d+) \1 \1/; // fail for 4+ group
// let reRegex = /(\d+) \1{2}/; // wrong, does not pass anything
// let reRegex = /(\d+) (\d+) (\d+)/; // wrong

console.log(falseRepeatNum.match(wrongRegex));

const arrStrObjKey = [["strTest", "correctTestResult", "comment"]];
const arrRegexObjKey = [["regexSyntax", "comment"]];
const arrStrTest = [
  ["42 42 42", true, ""],
  ["42 42 42 42", false, ""],
  ["11 12 13", false, ""],
  ["1 2 3", false, ""],
  ["42 42", false, ""],
  ["42 42 42 ", false, ""],

  //   ["1 42 42 42", ""],
  //   ["42 42 42 1", ""],
];
const arrRegexCheck = [
  [/^(\d+) \1 \1$/, ""],
  [/(\d+) \1 \1/, ""],
  [/(\d+) \1{2}/, ""],
  [/(\d+) (\d+) (\d+)/, ""],
];
const showMatchResult = false;

let checkRegexSyntax = (arrStrTest, arrRegexCheck, showMatchResult) => {
  arrRegexCheck.forEach((regexSyntax) => {
    console.log("===============");
    console.log(`➤ ${regexSyntax[0]} : ${regexSyntax[1]}`);
    arrStrTest.forEach((str) => {
      console.log(
        ` ✍ [${str[0]}]- correct result: ${str[1]} ${
          str[1] === regexSyntax[0].test(str[0])
            ? "❎"
            : str[1] === ""
            ? "❔"
            : "❌"
        }`
      );
      showMatchResult ? console.log(str[0].match(regexSyntax[0])) : "";
    });
  });
};

checkRegexSyntax(arrStrTest, arrRegexCheck, showMatchResult);
