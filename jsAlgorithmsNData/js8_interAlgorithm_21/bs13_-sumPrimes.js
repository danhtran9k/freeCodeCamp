/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes

==================================================================
DESCRIPTION

Sum All Primes
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

==================================================================
TESTCASE

sumPrimes(10) should return a number.

sumPrimes(10) should return 17.

sumPrimes(977) should return 73156.

==================================================================
SETUP

function sumPrimes(num) {
  return num;
}

sumPrimes(10);

==================================================================

*/

function sumPrimes(num) {
  let numCheck = 2;
  let primeArr = [];
  let sum = 0;
  //   for (let numCheck = 2; numCheck <= num; numCheck++){}
  while (numCheck <= num) {
    if (primeArr.every((prime) => numCheck % prime != 0)) {
      sum += numCheck;
    }
    primeArr.push(numCheck);
    numCheck++;
  }
  return sum;
}

// This solution is based on the Sieve of Eratosethenes
// Just for fun, read more on forum
// Applied Index operation
function sumPrimes2(num) {
  let isPrime = Array(num + 1).fill(true);
  // 0 and 1 are not prime
  isPrime[0] = false;
  isPrime[1] = false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (isPrime[i]) {
      // i has not been marked false -- it is prime
      for (let j = i * i; j <= num; j += i) isPrime[j] = false;
    }
  }
  // Sum all values still marked prime
  return isPrime.reduce((sum, prime, index) => (prime ? sum + index : sum), 0);
}

const sumPrimesTest = [
  [6, 10],
  [8, 17],
  [9, 17],
  [10, 17],
  [977, 73156],

  [5000, 1548136],
  // [500000, 9914236195], // dead calculation, fatality
];
import * as varTest from "../pj0_checker.js";
const test = varTest.testSuiteChecker;
const testArgs = [[]];
const showReturn = true;
const oneToOne = false;
const doubleCheck = false;
const callDoubleCheck = () => {};
// Wrapper callback, destruct arguments
const testInput = sumPrimesTest; // change this
let callback = sumPrimes; // change this
// myReplace(str, before, after)
const wrapCallback = (testInput) => {
  const str = testInput[0];
  const before = testInput[2];
  const after = testInput[3];
  return callback(str, before, after);
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
