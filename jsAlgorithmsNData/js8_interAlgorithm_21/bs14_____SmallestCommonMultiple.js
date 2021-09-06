/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple

==================================================================
DESCRIPTION

Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

==================================================================
TESTCASE

smallestCommons([1, 5]) should return a number.

smallestCommons([1, 5]) should return 60.

smallestCommons([5, 1]) should return 60.

smallestCommons([2, 10]) should return 2520.

smallestCommons([1, 13]) should return 360360.

smallestCommons([23, 18]) should return 6056820.

==================================================================
SETUP

function smallestCommons(arr) {
  return arr;
}


smallestCommons([1,5]);

==================================================================

*/

function smallestCommons(arr) {
  const [max, min] = [Math.max(...arr), Math.min(...arr)];
  let primeKey = createPrimeArr(max);
  let primePossibleObj = creatPrimeCommonObj(primeKey);
  let smallestFactor = { ...primePossibleObj };
  for (let numCheck = min; numCheck <= max; numCheck++) {
    let primeFactor = primeFactorByKey(numCheck, primePossibleObj);
    combineFactor(smallestFactor, primeFactor);
  }
  return numberFromFactor(smallestFactor);
}

function createPrimeArr(num) {
  let primeKey = [];
  for (let numCheck = 2; numCheck <= num; numCheck++) {
    if (primeKey.every((prime) => numCheck % prime != 0)) {
      primeKey.push(numCheck);
    }
  }
  return primeKey;
}

function creatPrimeCommonObj(primeArrKey) {
  let primeCommonsObj = {};
  primeArrKey.forEach((element) => {
    primeCommonsObj[element] = 0;
  });
  return primeCommonsObj;
}

function continueFactor(num, factorObj) {
  const factorKey = Object.keys(factorObj).map((prime) => {
    prime == 0 ? 1 : 0;
  });
  if (num !== 1) {
    while (!factorKey.includes(num)) {
      let prime = factorKey.find((prime) => num % prime == 0);
      primeCommonsObj[prime]++;
      num = num / prime;
    }
    primeCommonsObj[num]++;
  }
  console.log("primeCommonsObj:", primeCommonsObj);
  return factorObj;
}

// ➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿
const objNumKeytoArray = (objNumKey) =>
  Object.keys(objNumKey).map((strPrime) => Number(strPrime));

function combineFactor(oldFactor, newFactor) {
  for (let [key, value] of Object.entries(newFactor)) {
    oldFactor[key] = Math.max(value, oldFactor[key]);
  }
}

function numberFromFactor(primeFactorObj) {
  let numberConvert = 1
  for (let [key, value] of Object.entries(primeFactorObj)) {
    numberConvert *= Math.pow(key,value)
  }
  return numberConvert;
}

function primeFactorByKey(num, primeObj) {
  let primeCommonsObj = { ...primeObj };
  const primeArrKey = objNumKeytoArray(primeCommonsObj);
  if (num !== 1) {
    while (!primeArrKey.includes(num)) {
      let prime = primeArrKey.find((prime) => num % prime == 0);
      primeCommonsObj[prime]++;
      num = num / prime;
    }
    primeCommonsObj[num]++;
  }
  return primeCommonsObj;
}

function PrimeObj(num) {
  let primeCommonsObj = {};
  this.getPrimeKey = function (num) {
    let primeKey = [];
    for (let numCheck = 2; numCheck <= num; numCheck++) {
      if (primeKey.every((prime) => numCheck % prime != 0)) {
        primeKey.push(numCheck);
      }
    }
  };

  primeArrKey.forEach((element) => {
    primeCommonsObj[element] = 0;
  });
  this.getWeight = function () {
    return weight;
    // return this.weight will return undefined
  };
  return primeCommonsObj;
}

// ➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿
function smallestCommons2(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min);
  // GCD of two numbers
  // https://en.wikipedia.org/wiki/Greatest_common_divisor#Euclid's_algorithm
  const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b);
  // LCM of two numbers
  // https://en.wikipedia.org/wiki/Least_common_multiple#Using_the_greatest_common_divisor
  const lcm = (a, b) => a * b / gcd(a, b);
  // LCM of multiple numbers
  // https://en.wikipedia.org/wiki/Least_common_multiple#Other
  return range.reduce((multiple, curr) => lcm(multiple, curr));
}

// ➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿
// Find the SCM of a range of numbers
// Same idea as first sol, but write in much clearer
function smallestCommons3(arr) {
  let primeFactors = {};
  const [min, max] = arr.sort((a, b) => a - b);
  for (let i = min; i <= max; i++) {
    // Factorize number in range
    let primes = getPrimeFactors(i);
    for (let j in primes) {
      // Add factor to set or update number of occurrences
      if (!primeFactors[j] || primes[j] > primeFactors[j]) {
        primeFactors[j] = primes[j]
      }
    }
  }
  // Build SCM from factorization
  let multiple = 1;
  for (let i in primeFactors) {
    multiple *= i ** primeFactors[i]
  }
  return multiple;
}

// Compute prime factors of a number
function getPrimeFactors(num) {
  const factors = {};
  for (let prime = 2; prime <= num; prime++) {
    // Count occurances of factor
    // Note that composite values will not divide num
    while ((num % prime) === 0) {
      factors[prime] = (factors[prime]) ? factors[prime] + 1 : 1;
      num /= prime;
    }
  }
  return factors;
}

// ➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿

const smallestCommonsTest = [
  [[1, 5], 60],
  [[1, 13], 360360],
  [[5, 1], 60],
  [[2, 10], 2520],
  [[23, 18], 6056820],
];
const primeFactorByKeyInputTest = {
  2: 0,
  3: 0,
  5: 0,
  7: 0,
  11: 0,
};
const primeFactorByKeyTest = [
  [11, { 2: 0, 3: 0, 5: 0, 7: 0, 11: 1 }, { ...primeFactorByKeyInputTest }],
  [121, { 2: 0, 3: 0, 5: 0, 7: 0, 11: 2 }, { ...primeFactorByKeyInputTest }],
  [216, { 2: 3, 3: 3, 5: 0, 7: 0, 11: 0 }, { ...primeFactorByKeyInputTest }],
];

import * as varTest from "../pj0_checker.js";
const test = varTest.testSuiteChecker;
const testArgs = [[]];
const showReturn = true;
const oneToOne = false;
const doubleCheck = false;
const callDoubleCheck = () => {};
// Wrapper callback, destruct arguments
const testInput = smallestCommonsTest; // change this
let callback = smallestCommons; // change this
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
