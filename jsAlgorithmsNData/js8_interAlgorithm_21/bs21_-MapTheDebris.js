/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris

==================================================================
DESCRIPTION

Map the Debris
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

==================================================================
TESTCASE

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}].

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].

==================================================================
SETUP

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

==================================================================

*/
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  return arr.map(({ name, avgAlt }) => ({
    name,
    orbitalPeriod: Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(avgAlt + earthRadius, 3) / GM)
    ),
  }));
}

// orbitalPeriod([
//   { name: "iss", avgAlt: 413.6 },
//   { name: "hubble", avgAlt: 556.7 },
//   { name: "moon", avgAlt: 378632.553 },
// ]);

const orbitalPeriodTest = [
  [
    [{ name: "sputnik", avgAlt: 35873.5553 }],
    [{ name: "sputnik", orbitalPeriod: 86400 }],
  ],

  [
    [
      { name: "iss", avgAlt: 413.6 },
      { name: "hubble", avgAlt: 556.7 },
      { name: "moon", avgAlt: 378632.553 },
    ],
    [
      { name: "iss", orbitalPeriod: 5557 },
      { name: "hubble", orbitalPeriod: 5734 },
      { name: "moon", orbitalPeriod: 2377399 },
    ],
  ],
];

import * as varTest from "../pj0_checker.js";
const test = varTest.testSuiteChecker;
const testArgs = [[]];
const showReturn = true;
const oneToOne = false;
const doubleCheck = false;
const callDoubleCheck = () => {};
// Wrapper callback, destruct arguments
const testInput = orbitalPeriodTest; // change this
let callback = orbitalPeriod; // change this
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
