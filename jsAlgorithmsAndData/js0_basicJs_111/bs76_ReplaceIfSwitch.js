/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/replacing-if-else-chains-with-switch

==================================================================
DESCRIPTION

Replacing If Else Chains with Switch
If you have many options to choose from, a switch statement can be easier to write than many chained if/else if statements. The following:

if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
can be replaced with:

switch(val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}
Change the chained if/else if statements into a switch statement.



==================================================================
TESTCASE

You should not use any else statements anywhere in the editor

You should not use any if statements anywhere in the editor

You should have at least four break statements

chainToSwitch("bob") should be the string Marley

chainToSwitch(42) should be the string The Answer

chainToSwitch(1) should be the string There is no #1

chainToSwitch(99) should be the string Missed me by this much!

chainToSwitch(7) should be the string Ate Nine

chainToSwitch("John") should be "" (empty string)

chainToSwitch(156) should be "" (empty string)

==================================================================
SETUP

function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line

  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);

==================================================================

*/

function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
  var options = ["Marley", "The Answer", "There is no #1", "Missed me by this much!", "Ate Nine"]

  switch (val) {
    case "bob":
      answer = options[0];
      break;
    case 42:
      answer = options[1];
      break;
    case 1:
      answer = options[2];
      break;
    case 99:
      answer = options[3];
      break;
    case 7:
      answer = options[4];
      break;


  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);