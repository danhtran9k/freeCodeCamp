/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/testing-objects-for-properties

==================================================================
DESCRIPTION

Testing Objects for Properties
Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.

Example

var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");
The first hasOwnProperty returns true, while the second returns false.

Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found".



==================================================================
TESTCASE

checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift") should return the string pony.

checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet") should return the string kitten.

checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house") should return the string Not Found.

checkObj({city: "Seattle"}, "city") should return the string Seattle.

checkObj({city: "Seattle"}, "district") should return the string Not Found.

checkObj({pet: "kitten", bed: "sleigh"}, "gift") should return the string Not Found.

==================================================================
SETUP

function checkObj(obj, checkProp) {
  // Only change code below this line
  return "Change Me!";
  // Only change code above this line
}

==================================================================

*/

function checkObj(obj, checkProp) {
  // Only change code below this line
  return obj.hasOwnProperty(checkProp) ? obj[checkProp] : "Not Found";
  // Only change code above this line
}
