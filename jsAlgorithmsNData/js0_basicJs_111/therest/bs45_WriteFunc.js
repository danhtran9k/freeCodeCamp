/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/write-reusable-javascript-with-functions

==================================================================
DESCRIPTION

Write Reusable JavaScript with FunctionsPassed
In JavaScript, we can divide up our code into reusable parts called functions.

Here's an example of a function:

function functionName() {
  console.log("Hello World");
}
You can call or invoke this function by using its name followed by parentheses, like this: functionName(); Each time the function is called it will print out the message Hello World on the dev console. All of the code between the curly braces will be executed every time the function is called.

Create a function called reusableFunction which prints the string Hi World to the dev console.
Call the function.

==================================================================
TESTCASE

reusableFunction should be a function.

If reusableFunction is called, it should output the string Hi World to the console.

You should call reusableFunction once it is defined.

==================================================================
SETUP



==================================================================

*/

const reusableFunction = () => console.log("Hi World");
reusableFunction()
