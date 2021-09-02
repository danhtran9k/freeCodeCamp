/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/boo-who

==================================================================
DESCRIPTION

Boo who
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

==================================================================
TESTCASE

booWho(true) should return true.

booWho(false) should return true.

booWho([1, 2, 3]) should return false.

booWho([].slice) should return false.

booWho({ "a": 1 }) should return false.

booWho(1) should return false.

booWho(NaN) should return false.

booWho("a") should return false.

booWho("true") should return false.

booWho("false") should return false.

==================================================================
SETUP

function booWho(bool) {
  return bool;
}

booWho(null);

==================================================================

*/

function booWho(bool) {
  return typeof (bool) == "boolean";
}

booWho(null);
