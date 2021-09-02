/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/understand-the-immediately-invoked-function-expression-iife

==================================================================
DESCRIPTION

Understand the Immediately Invoked Function Expression (IIFE)
A common pattern in JavaScript is to execute a function as soon as it is declared:

(function () {
  console.log("Chirp, chirp!");
})();
This is an anonymous function expression that executes right away, and outputs Chirp, chirp! immediately.

Note that the function has no name and is not stored in a variable. The two parentheses () at the end of the function expression cause it to be immediately executed or invoked. This pattern is known as an immediately invoked function expression or IIFE.

Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function expression (IIFE).



==================================================================
TESTCASE

The function should be anonymous.

Your function should have parentheses at the end of the expression to call it immediately.

==================================================================
SETUP

function makeNest() {
  console.log("A cozy nest is ready");
}

makeNest();

==================================================================

*/

(function () {
  console.log("A cozy nest is ready");
})()

