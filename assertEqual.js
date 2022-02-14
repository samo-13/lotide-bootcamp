
// the function compares the two values it takes in and prints out a message telling us if they match or not.
// ---- If the values match, prints: Assertion Passed: [actual] === [expected] (but with the values filled in)
// ---- Otherwise prints: Assertion Failed: [actual] !== [expected] (but with the values filled in)
// ---- only use for checking primitive return types

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${actual}`);
  }
};

module.exports = assertEqual;