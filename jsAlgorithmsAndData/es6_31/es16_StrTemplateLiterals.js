/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/create-strings-using-template-literals

==================================================================
DESCRIPTION

Create Strings using Template Literals
A new feature of ES6 is the template literal. This is a special type of string that makes creating complex strings easier.

Template literals allow you to create multi-line strings and to use string interpolation features to create strings.

Consider the code below:

const person = {
  name: "Zodiac Hasbro",
  age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);
The console will display the strings Hello, my name is Zodiac Hasbro! and I am 56 years old..

A lot of things happened there. Firstly, the example uses backticks (`), not quotes (' or "), to wrap the string. Secondly, notice that the string is multi-line, both in the code and the output. This saves inserting \n within strings. The ${variable} syntax used above is a placeholder. Basically, you won't have to use concatenation with the + operator anymore. To add variables to strings, you just drop the variable in a template string and wrap it with ${ and }. Similarly, you can include other expressions in your string literal, for example ${a + b}. This new way of creating strings gives you more flexibility to create robust strings.

Use template literal syntax with backticks to create an array of list element (li) strings. Each list element's text should be one of the array elements from the failure property on the result object and have a class attribute with the value text-warning. The makeList function should return the array of list item strings.

Use an iterator method (any kind of loop) to get the desired output (shown below).

[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]

==================================================================
TESTCASE

failuresList should be an array containing result failure messages.

failuresList should be equal to the specified output.

Template strings and expression interpolation should be used.

An iterator should be used.

==================================================================
SETUP

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);

==================================================================

*/

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};

function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  // const failureItems = arr.map(
  //   (item) => `<li class="text-warning">${item}</li>`
  // );
  arr.forEach((ele) =>
    failureItems.push(`<li class="text-warning">${ele}</li>`)
  );
  // Only change code above this line
  return failureItems;
}
// cannot use failureItems+= because const, but can be manipulate with push
const failuresList = makeList(result.failure);
console.log(failuresList);

// https://codeburst.io/javascript-map-vs-foreach-f38111822c0f
// Just about anything you can do with forEach() you can do with map(), and vise versa.
// map() allocates memory and stores return values. forEach() throws away return values and always returns undefined.
// forEach() will allow a callback function to mutate the current array. map() will instead return a new array.