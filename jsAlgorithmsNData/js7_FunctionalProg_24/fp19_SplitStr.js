/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/split-a-string-into-an-array-using-the-split-method

==================================================================
DESCRIPTION

Split a String into an Array Using the split Method
The split method splits a string into an array of strings. It takes an argument for the delimiter, which can be a character to use to break up the string or a regular expression. For example, if the delimiter is a space, you get an array of words, and if the delimiter is an empty string, you get an array of each character in the string.

Here are two examples that split one string by spaces, then another by digits using a regular expression:

var str = "Hello World";
var bySpace = str.split(" ");

var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/);
bySpace would have the value ["Hello", "World"] and byDigits would have the value ["How", "are", "you", "today"].

Since strings are immutable, the split method makes it easier to work with them.

Use the split method inside the splitify function to split str into an array of words. The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation.



==================================================================
TESTCASE

Your code should use the split method.

splitify("Hello World,I-am code") should return ["Hello", "World", "I", "am", "code"].

splitify("Earth-is-our home") should return ["Earth", "is", "our", "home"].

splitify("This.is.a-sentence") should return ["This", "is", "a", "sentence"].

==================================================================
SETUP

function splitify(str) {
  // Only change code below this line


  // Only change code above this line
}
splitify("Hello World,I-am code");

==================================================================

*/

function splitify(str) {
  // Only change code below this line
  let regexSplit = /\W/
  return str.split(regexSplit);
  // Only change code above this line
}
splitify("Hello World,I-am code");
console.log(splitify("Hello World,I-am code"))

// console.log("How9are7you2today".split(/\d/))
