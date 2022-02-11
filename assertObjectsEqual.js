// eqObjects function returns true if both objects have identical keys with identical values
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

// assertObjectsEqual function helps easily test functions that return objects
// takes in two objects and console.log's an appropriate message to the console.

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`💚💚💚 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else { 
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// Test code:
const abc = {a: "7", b: "8", c: [4, 5]};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertObjectsEqual(ba, abc);
assertObjectsEqual(ab, ba);
assertObjectsEqual(ba, ab);

