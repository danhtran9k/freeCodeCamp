/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup

==================================================================
DESCRIPTION

Profile Lookup
We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return the string No such contact.

If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.

==================================================================
TESTCASE

lookUpProfile("Kristian", "lastName") should return the string Vos

lookUpProfile("Sherlock", "likes") should return ["Intriguing Cases", "Violin"]

lookUpProfile("Harry", "likes") should return an array

lookUpProfile("Bob", "number") should return the string No such contact

lookUpProfile("Bob", "potato") should return the string No such contact

lookUpProfile("Akira", "address") should return the string No such property

==================================================================
SETUP

// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
  // Only change code below this line

  // Only change code above this line
}

lookUpProfile("Akira", "likes");

==================================================================

*/
var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

// Note that all firstName here is unique, so we dont need to use filter
// forEach loop do not break early and will loop through all elements. But due to unique value of name, this example does not shown the problem.

// Should use find here as it will work the same as an for loop that return the first found value

function lookUpProfile(name, prop) {
  // Only change code below this line
  let contactByName = contacts.find((ele) => ele.firstName === name);
  return contactByName
    ? contactByName.hasOwnProperty(prop)
      ? contactByName[prop]
      : "No such property"
    : "No such contact";

  // Only change code above this line
}

// Sol 2 - basic
// function lookUpProfile(name, prop) {
//   for (let i = 0; i < contacts.length; i++) {
//     if (contacts[i].firstName === name) {
//       if (prop in contacts[i]) {
//         return contacts[i][prop];
//       } else {
//         return "No such property";
//       }
//     }
//   }
//   return "No such contact";
// }

lookUpProfile("Akira", "likes");
