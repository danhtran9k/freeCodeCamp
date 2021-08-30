/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/restrict-possible-usernames

==================================================================
DESCRIPTION

Restrict Possible Usernames
Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.

You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

Usernames can only use alpha-numeric characters.

The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

Username letters can be lowercase and uppercase.

Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

Change the regex userCheck to fit the constraints listed above.

==================================================================
TESTCASE

Your regex should match the string JACK

Your regex should not match the string J

Your regex should match the string Jo

Your regex should match the string Oceans11

Your regex should match the string RegexGuru

Your regex should not match the string 007

Your regex should not match the string 9

Your regex should not match the string A1

Your regex should not match the string BadUs3rnam3

Your regex should match the string Z97

Your regex should not match the string c57bT3

Your regex should match the string AB1

Your regex should not match the string J%4

==================================================================
SETUP

let username = "JackOfAllTrades";
let userCheck = /change/; // Change this line
let result = userCheck.test(username);

==================================================================

*/

let arrRegexUser = [
  [/(?=\w{2,}|)^([a-z]+)(\d*)$/i, "my sol", ""],
  [/^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i, "fcc sol 1", ""],
  [/^[a-z]([0-9]{2,}|[a-z]+\d*)$/i, "fcc sol 2", ""],
];
let arrStrUser = [
  ["JACK", true, ""],
  ["J", false, ""],
  ["Jo", true, ""],
  ["Oceans11", true, ""],
  ["RegexGuru", true, ""],
  ["007", false, ""],
  ["9", false, ""],
  ["A1", false, ""],
  ["BadUs3rnam3", false, ""],
  ["Z97", true, ""],
  ["Jc57bT3", false, ""],
  ["AB1", true, ""],
  ["J%4", false, ""],
  ["JackOfAllTrades", true, ""],
];

const showMatching = false;
import {checkRegexArr} from './a0_RegexSummary.mjs';
checkRegexArr(arrStrUser, arrRegexUser, showMatching);