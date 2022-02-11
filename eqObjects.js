
// the assertEqual function compares the two values it takes in and prints out a message telling us if they match or not.
// ---- if the values match, prints: Assertion Passed: [actual] === [expected] (but with the values filled in)
// ---- otherwise prints: Assertion Failed: [actual] !== [expected] (but with the values filled in)
// ---- only use for checking primitive return types

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${actual}`);
  }
};

// the eqObjects function Returns true if both objects have identical keys with identical values
// otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key of Object.keys(object1)) {
    if (object1[key] !== object2[key]) {
      return false;
  }
}
  return true;
};

// Test code:
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true
assertEqual(eqObjects(ab, ba), true); 

/* const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, ba), false); 
 */

// References:
// ---- Object.entries()
// -------- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
// ---- Object.keys()
// -------- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys