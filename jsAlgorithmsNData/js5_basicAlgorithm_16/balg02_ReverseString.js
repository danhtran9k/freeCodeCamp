/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string

==================================================================
DESCRIPTION

Reverse a String
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

==================================================================
TESTCASE

reverseString("hello") should return a string.

reverseString("hello") should return the string olleh.

reverseString("Howdy") should return the string ydwoH.

reverseString("Greetings from Earth") should return the string htraE morf sgniteerG.

==================================================================
SETUP

function reverseString(str) {
  return str;
}

reverseString("hello");

==================================================================

*/

function reverseString(str) {
  let reverseStr = "";
  for (let c of str) {
    reverseStr = c + reverseStr
  }
  return reverseStr;
}

reverseString("hello");
console.log('reverseString("hello"):', reverseString("hello"))


