/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/using-the-test-method

==================================================================
DESCRIPTION

Using the Test Method
Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.

If you want to find the word the in the string The dog chased the cat, you could use the following regular expression: /the/. Notice that quote marks are not required within the regular expression.

JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.

let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
The test method here returns true.

Apply the regex myRegex on the string myString using the .test() method.

==================================================================
TESTCASE

You should use .test() to test the regex.

Your result should return true.

==================================================================
SETUP

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex; // Change this line

==================================================================

*/

const myString = "Hello, World!";
const myRegex = /or/i;
let searchStr = "Or"
let testRegex = "/" + searchStr + "/i"
// let result = testRegex.test(myString); // Change this line
// console.log(result)
let re = new RegExp(`${searchStr}`, 'gi');
let result = re.test(myString)
console.log(re)
console.log('result:', result)



