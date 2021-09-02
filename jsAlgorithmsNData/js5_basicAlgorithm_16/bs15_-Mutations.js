/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations

==================================================================
DESCRIPTION

Mutations
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.



==================================================================
TESTCASE

mutation(["hello", "hey"]) should return false.

mutation(["hello", "Hello"]) should return true.

mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.

mutation(["Mary", "Army"]) should return true.

mutation(["Mary", "Aarmy"]) should return true.

mutation(["Alien", "line"]) should return true.

mutation(["floor", "for"]) should return true.

mutation(["hello", "neo"]) should return false.

mutation(["voodoo", "no"]) should return false.

mutation(["ate", "date"]) should return false.

mutation(["Tiger", "Zebra"]) should return false.

mutation(["Noel", "Ole"]) should return true.

==================================================================
SETUP

function mutation(arr) {
  return arr;
}

mutation(["hello", "hey"]);

==================================================================

*/

// function mutation(arr) {
//   let arrTemp = arr[0].toLowerCase();
//   let strSearch = arr[1].toLowerCase();
//   // could create a regex str search here
//   for (let i = 0; i < strSearch.length; i++) {
//     if (arrTemp.indexOf(strSearch[i]) == -1) {
//       return false;
//     }
//     // mutation(["Mary", "Aarmy"]) will return all with this else
//     // else {
//     //   arrTemp =
//     //     arrTemp.substring(0, indexSearch) + arrTemp.substring(indexSearch + 1);
//     // }
//   }
//   return true;
// }


// console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "llo"]));

// mutation(["Mary", "Aarmy"])
// should return true - cannot use slice and search here

// sol 2 - fcc
// convert string to arr and use every
// function mutation(arr) {
//   return arr[1]
//     .toLowerCase()
//     .split("")
//     .every(function(letter) {
//       return arr[0].toLowerCase().indexOf(letter) != -1;
//     });
// }

// Sol 3 - fcc
// function mutation([ target, test ], i = 0) {
//   target = target.toLowerCase();
//   test = test.toLowerCase();
//   return i >= test.length
//     ? true
//     : !target.includes(test[i])
//       ? false
//       : mutation([ target, test ], i + 1);
// }