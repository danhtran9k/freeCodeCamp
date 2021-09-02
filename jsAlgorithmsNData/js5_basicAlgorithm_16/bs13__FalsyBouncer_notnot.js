/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer

==================================================================
DESCRIPTION

Falsy Bouncer
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.

==================================================================
TESTCASE

bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].

bouncer(["a", "b", "c"]) should return ["a", "b", "c"].

bouncer([false, null, 0, NaN, undefined, ""]) should return [].

bouncer([null, NaN, 1, 2, undefined]) should return [1, 2].

==================================================================
SETUP

function bouncer(arr) {
  return arr;
}

bouncer([7, "ate", "", false, 9]);

==================================================================

*/


function bouncer(arr) {
  return arr.filter(ele => !!ele);
}
bouncer([7, "ate", "", false, 9]);
// Note that both below return true, !! convert ele to Boolean value
console.log(null === true)
console.log(null === false)
