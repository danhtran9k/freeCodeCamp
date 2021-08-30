/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/multiple-identical-options-in-switch-statements

==================================================================
DESCRIPTION

Multiple Identical Options in Switch Statements
If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered. If you have multiple inputs with the same output, you can represent them in a switch statement like this:

var result = "";
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
Cases for 1, 2, and 3 will all produce the same result.

Write a switch statement to set answer for the following ranges:
1-3 - Low
4-6 - Mid
7-9 - High

Note: You will need to have a case statement for each number in the range.


==================================================================
TESTCASE

sequentialSizes(1) should return the string Low

sequentialSizes(2) should return the string Low

sequentialSizes(3) should return the string Low

sequentialSizes(4) should return the string Mid

sequentialSizes(5) should return the string Mid

sequentialSizes(6) should return the string Mid

sequentialSizes(7) should return the string High

sequentialSizes(8) should return the string High

sequentialSizes(9) should return the string High

You should not use any if or else statements

You should have nine case statements

==================================================================
SETUP

function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

sequentialSizes(1);

==================================================================

*/

function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  var options = ["Low", "Mid", "High"];

  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = options[0];
      break;
    case 4:
    case 5:
    case 6:
      answer = options[1];
      break;
    case 7:
    case 8:
    case 9:
      answer = options[2];
      break;
  }

  // Only change code above this line
  return answer;
}

sequentialSizes(1);
