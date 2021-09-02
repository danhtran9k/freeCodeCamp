/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/understand-own-properties

==================================================================
DESCRIPTION

Understand Own Properties
In the following example, the Bird constructor defines two properties: name and numLegs:

function Bird(name) {
  this.name  = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");
name and numLegs are called own properties, because they are defined directly on the instance object. That means that duck and canary each has its own separate copy of these properties. In fact every instance of Bird will have its own copy of these properties. The following code adds all of the own properties of duck to the array ownProps:

let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);
The console would display the value ["name", "numLegs"].

Add the own properties of canary to the array ownProps.

==================================================================
TESTCASE

ownProps should include the values numLegs and name.

You should solve this challenge without using the built in method Object.keys().

You should solve this challenge without hardcoding the ownProps array.

==================================================================
SETUP

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line

==================================================================

*/

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
// console.log(canary)
let ownProps = [];
// Only change code below this line
// hasOwnProperty check for the property of the Class of obj itself
// duck may have some specific prop that Class Bird do not have
for (let property in canary) {
  if(canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);
