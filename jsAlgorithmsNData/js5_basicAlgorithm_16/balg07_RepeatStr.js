/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string

==================================================================
DESCRIPTION

Repeat a String Repeat a String
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

==================================================================
TESTCASE

repeatStringNumTimes("*", 3) should return the string ***.

repeatStringNumTimes("abc", 3) should return the string abcabcabc.

repeatStringNumTimes("abc", 4) should return the string abcabcabcabc.

repeatStringNumTimes("abc", 1) should return the string abc.

repeatStringNumTimes("*", 8) should return the string ********.

repeatStringNumTimes("abc", -2) should return an empty string ("").

The built-in repeat() method should not be used.

repeatStringNumTimes("abc", 0) should return "".

==================================================================
SETUP

function repeatStringNumTimes(str, num) {
  return str;
}

repeatStringNumTimes("abc", 3);

==================================================================

*/

function repeatStringNumTimes(str, num) {
  return num <= 0
    ? (str = "")
    : (str = str + repeatStringNumTimes(str, num - 1));
}

// function repeatStringNumTimes(str, num) {
//   var accumulatedStr = "";

//   while (num > 0) {
//     accumulatedStr += str;
//     num--;
//   }

//   return accumulatedStr;
// }

repeatStringNumTimes("abc", 3);
