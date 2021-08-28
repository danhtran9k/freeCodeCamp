/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/selecting-from-many-options-with-switch-statements

==================================================================
DESCRIPTION

Selecting from Many Options with Switch Statements
If you have many options to choose from, use a switch statement. A switch statement tests a value and can have many case statements which define various possible values. Statements are executed from the first matched case value until a break is encountered.

Here is an example of a switch statement:

switch(lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}
case values are tested with strict equality (===). The break tells JavaScript to stop executing statements. If the break is omitted, the next statement will be executed.

Write a switch statement which tests val and sets answer for the following conditions:
1 - alpha
2 - beta
3 - gamma
4 - delta

==================================================================
TESTCASE

caseInSwitch(1) should have a value of the string alpha

caseInSwitch(2) should have a value of the string beta

caseInSwitch(3) should have a value of the string gamma

caseInSwitch(4) should have a value of the string delta

You should not use any if or else statements

You should have at least 3 break statements

==================================================================
SETUP

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

caseInSwitch(1);

==================================================================

*/

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  var options = ["alpha", "beta", "gamma", "delta"];
  switch (val) {
    case 1:
      answer = options[0];
      break;
    case 2:
      answer = options[1];
      break;
    case 3:
      answer = options[2];
      break;
    case 4:
      answer = options[3];
      break;
  }

  // Only change code above this line
  return answer;
}

caseInSwitch(1);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
// https://ultimatecourses.com/blog/deprecating-the-switch-statement-for-object-literals
