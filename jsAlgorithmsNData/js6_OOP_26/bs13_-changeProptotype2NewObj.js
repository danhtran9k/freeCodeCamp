/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/change-the-prototype-to-a-new-object

==================================================================
DESCRIPTION

Change the Prototype to a New Object
Up until now you have been adding properties to the prototype individually:

Bird.prototype.numLegs = 2;
This becomes tedious after more than a few properties.

Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}
A more efficient way is to set the prototype to a new object that already contains the properties. This way, the properties are added all at once:

Bird.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by setting the prototype to a new object.

==================================================================
TESTCASE

Dog.prototype should be set to a new object.

Dog.prototype should have the property numLegs.

Dog.prototype should have the method eat().

Dog.prototype should have the method describe().

==================================================================
SETUP

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line

};

==================================================================

*/


