// if number of items, or array items at each index don't match return false - else return true
const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        return false;
      }
    }
  } return true;
  }

  module.exports = eqArrays;