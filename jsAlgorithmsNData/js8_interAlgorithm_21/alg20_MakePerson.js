/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person

==================================================================
DESCRIPTION

Make a Person
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

==================================================================
TESTCASE

Object.keys(bob).length should return 6.

bob instanceof Person should return true.

bob.firstName should return undefined.

bob.lastName should return undefined.

bob.getFirstName() should return the string Bob.

bob.getLastName() should return the string Ross.

bob.getFullName() should return the string Bob Ross.

bob.getFullName() should return the string Haskell Ross after bob.setFirstName("Haskell").

bob.getFullName() should return the string Haskell Curry after bob.setLastName("Curry").

bob.getFullName() should return the string Haskell Curry after bob.setFullName("Haskell Curry").

bob.getFirstName() should return the string Haskell after bob.setFullName("Haskell Curry").

bob.getLastName() should return the string Curry after bob.setFullName("Haskell Curry").

==================================================================
SETUP

var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return "";
  };
  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();

==================================================================

*/

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)

var Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let fullName = firstAndLast;
  this.getFullName = function () {
    return fullName;
  };
  this.getLastName = function () {
    return fullName.split(" ")[1];
  };
  this.getFirstName = function () {
    return fullName.split(" ")[0];
  };
  this.setFullName = function (firstAndLast) {
    fullName = firstAndLast;
  };
  this.setFirstName = function (name) {
    fullName = name + " " + fullName.split(" ")[1];
  };
  this.setLastName = function (name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };
  // this.setFirstName = function (first) {
  //   let newName = fullName.split(" ");
  //   newName[0] = first;
  //   fullName = newName.join(" ");
  // };
  // this.setLastName = function (last) {
  //   let newName = fullName.split(" ");
  //   newName[1] = last;
  //   fullName = newName.join(" ");
  // };
  // return firstAndLast;
};

var bob = new Person("Bob Ross");
// bob.getFullName();
// console.log("bob.getFullName():", bob.getFullName());
// Object.keys(bob).length;
// console.log("Object.keys(bob).length:", Object.keys(bob).length);

// const personTest = [
//   [Object.keys(bob).length, 6],
//   [bob instanceof Person, true],
//   [bob.getFullName(), "Bob Ross"],
//   [bob.getFirstName(), "Bob"],
//   [bob.getLastName(), "Ross"],
//   [bob.firstName, undefined],
//   [bob.lastName, undefined], // 7
//   [bob.getFullName(), "One Ross", bob.setFirstName("One")],
//   [bob.getFullName(), "Haskell Two", bob.setLastName("Two")],
//   [bob.getLastName(), "Three", bob.setFullName("Trois Three")], // 10
//   [bob.getFirstName(), "Four", bob.setFullName("Four Quatre")],
//   [bob.getFullName(), "Fin Final", bob.setFullName("Fin Final")], //12
// ];
// const personTest = [
//   [Object.keys(bob).length, 6],
//   [bob instanceof Person, true],
//   [bob.firstName, undefined],
//   [bob.lastName, undefined],
//   ["getFullName", "Bob Ross"],
//   ["getFirstName", "Bob"],
//   ["getLastName", "Ross"],
//   ["getFullName", "One Ross", bob.setFirstName("One")],
//   ["getFullName", "Haskell Two", bob.setLastName("Two")],
//   ["getLastName", "Three", bob.setFullName("Trois Three")],
//   ["getFirstName", "Four", bob.setFullName("Four Quatre")],
//   ["getFullName", "Fin Final", bob.setFullName("Fin Final")],
// ];

import * as varTest from "../pj0_checker.js";
const test = varTest.testSuiteChecker;
const testArgs = [[]];
const showReturn = true;
const oneToOne = false;
const doubleCheck = false;
const callDoubleCheck = () => {};
// Wrapper callback, destruct arguments
const testInput = personTest; // change this

// const wrapCallback = (testInput) => {
//   testInput[2];
//   console.log("current name: " + bob.getFullName());
//   switch (testInput[0]) {
//     case "getFullName":
//       console.log(bob.getFullName());
//       return bob.getFullName();
//     case "getFirstName":
//       console.log(bob.getFirstName());
//       return bob.getFirstName();
//     case "getLastName":
//       console.log(bob.getLastName());
//       return bob.getLastName();
//     default:
//       return testInput[0];
//   }
// };
// const wrapCallback = (testInput) => {
//   testInput[2];
//   testInput[0];
//   console.log("recheck current name: " + bob.getFullName());
//   return testInput[0];
// };

// run command
// test(
//   testInput,
//   testArgs,
//   showReturn,
//   doubleCheck,
//   oneToOne,
//   wrapCallback,
//   callDoubleCheck
// // );
// console.log(personTest[10][1])
// console.log(personTest[10][2])
// console.log(personTest[10][0])
// console.log('bob.getFullName():', bob.getFullName())
