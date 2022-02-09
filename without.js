// 
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${actual}`);
  }
};
// Changed the names for actual and expected? Also tried console.log instead of return. Issue was I hadn't changed the test code to have assertEqual.
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

// Without function
        // take in a source array and a itemsToRemove array (source, itemsToRemove)
        // should return a new array with only those elements from source that are not present in the itemsToRemove array

let without = function (source, itemsToRemove) {
for (i = 0; i < source.length; i++) {
  for (j = 0; j < itemsToRemove.length; j++) {
    if (source[i] === itemsToRemove[j]); {
      source.splice(i, 1); // 
    }
  }
  return source;
} 

}; 

// Test code
console.log(without([1, 2, 3], [1])); // => [2, 3]



// Resources:
    // Used a nested loop: https://www.w3schools.com/jsref/jsref_for.asp
    // Splice method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
