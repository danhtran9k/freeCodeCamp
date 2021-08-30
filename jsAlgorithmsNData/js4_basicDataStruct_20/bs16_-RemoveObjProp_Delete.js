/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/use-the-delete-keyword-to-remove-object-properties

==================================================================
DESCRIPTION

Use the delete Keyword to Remove Object Properties
Now you know what objects are and their basic features and advantages. In short, they are key-value stores which provide a flexible, intuitive way to structure data, and, they provide very fast lookup time. Throughout the rest of these challenges, we will describe several common operations you can perform on objects so you can become comfortable applying these useful data structures in your programs.

In earlier challenges, we have both added to and modified an object's key-value pairs. Here we will see how we can remove a key-value pair from an object.

Let's revisit our foods object example one last time. If we wanted to remove the apples key, we can remove it by using the delete keyword like this:

delete foods.apples;
Use the delete keyword to remove the oranges, plums, and strawberries keys from the foods object.

==================================================================
TESTCASE

The foods object should only have three keys: apples, grapes, and bananas.

The oranges, plums, and strawberries keys should be removed using delete.

==================================================================
SETUP

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Only change code below this line

// Only change code above this line

console.log(foods);

==================================================================

*/

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
let keytodelete = ["oranges", "plums", "strawberries"]
// Only change code below this line
keytodelete.forEach(key => delete foods[key])
// Only change code above this line

console.log(foods);
