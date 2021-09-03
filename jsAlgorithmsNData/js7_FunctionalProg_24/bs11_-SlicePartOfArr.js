/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/return-part-of-an-array-using-the-slice-method

==================================================================
DESCRIPTION

Return Part of an Array Using the slice Method
The slice method returns a copy of certain elements of an array. It can take two arguments, the first gives the index of where to begin the slice, the second is the index for where to end the slice (and it's non-inclusive). If the arguments are not provided, the default is to start at the beginning of the array through the end, which is an easy way to make a copy of the entire array. The slice method does not mutate the original array, but returns a new one.

Here's an example:

var arr = ["Cat", "Dog", "Tiger", "Zebra"];
var newArray = arr.slice(1, 3);
newArray would have the value ["Dog", "Tiger"].

Use the slice method in the sliceArray function to return part of the anim array given the provided beginSlice and endSlice indices. The function should return an array.



==================================================================
TESTCASE

Your code should use the slice method.

The inputAnim variable should not change.

sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3) should return ["Dog", "Tiger"].

sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1) should return ["Cat"].

sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4) should return ["Dog", "Tiger", "Zebra"].

==================================================================
SETUP

function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line


  // Only change code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);

==================================================================

*/

function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line
  // impliment Slice Method
  // let newArr = [];
  // for (let index = beginSlice; index < endSlice; index++) {
  //   newArr.push(anim[index]);
  // }
  // return newArr;
  // Use Slice directly
  return anim.slice(beginSlice, endSlice);
  // Only change code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
