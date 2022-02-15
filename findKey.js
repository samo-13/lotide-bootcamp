// building a less limited/more complex version of findKeyByValue.js

// ---- function findKey takes in an object and a callback. 
// ---- scans the object and returns the first key for which the callback returns a truthy value. 
// ---- If no key is found, then it should return undefined.


const findKey = function(item, callback) {
  for (const key in item) {
    console.log(item[key]);
    if (callback(item[key]))
      return key;
  }
};


// Testing code:

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${actual}`);
  }
};

const test = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

assertEqual(test, "noma");

module.exports = findKey;