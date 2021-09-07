/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/everything-be-true

==================================================================
DESCRIPTION

Everything Be True
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.



==================================================================
TESTCASE

truthCheck([[{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return true.

truthCheck([[{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return false.

truthCheck([[{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") should return false.

truthCheck([[{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat") should return false.

truthCheck([[{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastForwzzard", "onBoat": true}], "onBoat") should return true.

truthCheck([[{"single": "yes"}], "single") should return true.

truthCheck([[{"single": ""}, {"single": "double"}], "single") should return false.

truthCheck([[{"single": "double"}, {"single": undefined}], "single") should return false.

truthCheck([[{"single": "double"}, {"single": NaN}], "single") should return false.

==================================================================
SETUP

function truthCheck(collection, pre) {
  return pre;
}

truthCheck([[{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

==================================================================

*/

function truthCheck(collection, pre) {
  // return collection
  //   .map((item) => item.hasOwnProperty(pre) && !!item[pre])
  //   .reduce((a, b) => a && b);
  // return collection.every((item) => item.hasOwnProperty(pre) && !!item[pre]);
  return collection.every((item) => item[pre]);
}

console.log(
  truthCheck(
    [
      { user: "Tinky-Winky", sex: "male" },
      { user: "Dipsy", sex: "male" },
      { user: "Laa-Laa", sex: "female" },
      { user: "Po", sex: "female" },
    ],
    "sex"
  )
);
truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" },
  ],
  "sex"
);

console.log("Boolean(undefined):", Boolean(undefined));

const truthCheckTest = [
  [
    [
      { user: "Tinky-Winky", sex: "male" },
      { user: "Dipsy", sex: "male" },
      { user: "Laa-Laa", sex: "female" },
      { user: "Po", sex: "female" },
    ],
    true,
    "sex",
  ],

  [
    [
      { user: "Tinky-Winky", sex: "male" },
      { user: "Dipsy" },
      { user: "Laa-Laa", sex: "female" },
      { user: "Po", sex: "female" },
    ],
    false,
    "sex",
  ],

  [
    [
      { user: "Tinky-Winky", sex: "male", age: 0 },
      { user: "Dipsy", sex: "male", age: 3 },
      { user: "Laa-Laa", sex: "female", age: 5 },
      { user: "Po", sex: "female", age: 4 },
    ],
    false,
    "age",
  ],

  [
    [
      { name: "Pete", onBoat: true },
      { name: "Repeat", onBoat: true },
      { name: "FastForward", onBoat: null },
    ],
    false,
    "onBoat",
  ],

  [
    [
      { name: "Pete", onBoat: true },
      { name: "Repeat", onBoat: true, alias: "Repete" },
      { name: "FastForwzzard", onBoat: true },
    ],
    true,
    "onBoat",
  ],

  [[{ single: "yes" }], true, "single"],

  [[{ single: "" }, { single: "double" }], false, "single"],

  [[{ single: "double" }, { single: undefined }], false, "single"],

  [[{ single: "double" }, { single: NaN }], false, "single"],
];

import * as varTest from "../pj0_checker.js";
const test = varTest.testSuiteChecker;
const testArgs = [[]];
const showReturn = true;
const oneToOne = false;
const doubleCheck = false;
const callDoubleCheck = () => {};
// Wrapper callback, destruct arguments
const testInput = truthCheckTest; // change this
let callback = truthCheck; // change this
// myReplace(str, before, after)
const wrapCallback = (testInput) => {
  const str = testInput[0];
  const before = testInput[2];
  return callback(str, before);
};
// run command
test(
  testInput,
  testArgs,
  showReturn,
  doubleCheck,
  oneToOne,
  wrapCallback,
  callDoubleCheck
);
