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


/*
letterPositions function
---- return all the indices (zero-based positions) in the string where each character is found.
---- For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.
*/

/*
Planning Notes:
---- define object structure to return

variable = On each iteration a value of a different property is assigned to variable. variable may be declared with const, let, or var.
iterable = Object whose iterable properties are iterated.
*/

const letterPositions = function(sentence) {
  const results = {};
  let count = -1;
  for (let letter of sentence) {
    if (letter !== ' ') {
      if (results[letter]) {
        count += 1;
        results[letter].push(count);
      } else {
        count += 1;
        results[letter] = [count];
      }
    } else {
      count += 1;
    }
  }
  return results;
};

console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]);
// Expected outcome:
/* {
{ h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] }
} */



// Testing code
// Ask why when I do results.letter on lines 43 and 46 it returns [4] - is this because it literally counts the number of letters in hello?

module.exports = letterPositions;