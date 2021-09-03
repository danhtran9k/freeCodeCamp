/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem

==================================================================
DESCRIPTION

Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
Now that you have worked through a few challenges using higher-order functions like map(), filter(), and reduce(), you now get to apply them to solve a more complex challenge.

Complete the code for the squareList function using any combination of map(), filter(), and reduce(). The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].

Note: Your function should not use any kind of for or while loops or the forEach() function.

==================================================================
TESTCASE

should return [16, 1764, 36].

squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]) should return [9, 100, 49].

==================================================================
SETUP

const squareList = arr => {
  // Only change code below this line
  return arr;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

==================================================================

*/

const squareList = (arr) => {
  // Only change code below this line
  return arr.reduce((arr, ele) => {
    return ele > 0 && Number.isInteger(ele) ? arr.concat(ele ** 2) : arr;
  }, []);
  // Only change code above this line
};

// const squareList = (arr) => {
//   return arr
//     .filter((ele) => ele > 0 && Number.isInteger(ele))
//     .map((ele) => ele ** 2);
// };
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
