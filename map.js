const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        return false;
      }
    } return true;
  }
};

    
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`💚💚💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// ----------

// Function Definition
// ---- Our map function will take in two arguments:

// ---- 01. An array to map
// ---- 02. A callback function

// ---- The map function will return a new array based on the results of the callback function.

const words = ["ground", "control", "to", "major", "george"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, words => words.toUpperCase());
console.log(results1);
assertArraysEqual(results1, ["GROUND", "CONTROL", "TO", "MAJOR", "GEORGE"])