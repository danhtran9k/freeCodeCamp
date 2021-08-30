/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-the-parseint-function

==================================================================
DESCRIPTION

Use the parseInt Function
The parseInt() function parses a string and returns an integer. Here's an example:

var a = parseInt("007");
The above function converts the string 007 to the integer 7. If the first character in the string can't be converted into a number, then it returns NaN.

Use parseInt() in the convertToInteger function so it converts the input string str into an integer, and returns it.

==================================================================
TESTCASE

convertToInteger should use the parseInt() function

convertToInteger("56") should return a number

convertToInteger("56") should return 56

convertToInteger("77") should return 77

convertToInteger("JamesBond") should return NaN

==================================================================
SETUP

function convertToInteger(str) {

}

convertToInteger("56");

==================================================================

*/


function convertToInteger(str) {
    return parseInt(str);
  }
  
  convertToInteger("56");