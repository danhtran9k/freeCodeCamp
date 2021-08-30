/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/understanding-undefined-value-returned-from-a-function

==================================================================
DESCRIPTION

Understanding Undefined Value returned from a FunctionPassed
A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.

Example

var sum = 0;
function addSum(num) {
  sum = sum + num;
}
addSum(3);
addSum is a function without a return statement. The function will change the global sum variable but the returned value of the function is undefined.

Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.



==================================================================
TESTCASE

addFive should be a function.

Once both functions have run, the sum should be equal to 8.

Returned value from addFive should be undefined.

Inside the addFive function, you should add 5 to the sum variable.

==================================================================
SETUP

// Setup
var sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line


// Only change code above this line

addThree();
addFive();

==================================================================

*/
// Setup

var sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line

function addFive() {
  sum += 5;
}
// Only change code above this line

addThree();
addFive();

