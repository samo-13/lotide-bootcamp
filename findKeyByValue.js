const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${actual}`);
  }
};

const findKeyByValue = function(object, value) {
  for (const objectKeys in object) {
    if (object[objectKeys] === value) {
      return objectKeys;
    }
  }
};

// TEST CODE
/* assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 2);
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 1); */


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);