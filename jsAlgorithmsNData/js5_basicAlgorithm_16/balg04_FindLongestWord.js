/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string

==================================================================
DESCRIPTION

Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.

==================================================================
TESTCASE

findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.

findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.

findLongestWordLength("May the force be with you") should return 5.

findLongestWordLength("Google do a barrel roll") should return 6.

findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.

findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.

==================================================================
SETUP

function findLongestWordLength(str) {
  return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

==================================================================

*/

function findLongestWordLength(str) {
  return str
    .split(" ")
    .reduce((longestLength, curr) => Math.max(longestLength, curr.length), 0);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

findLongestWordLength("The quick brown fox jumped over the lazy dog");

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
