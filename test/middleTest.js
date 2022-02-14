const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6])", () => {
    assert.deepEqual(middle[1, 2, 3, 4, 5, 6]), [3, 4];
  });
  it("returns [3] for [1, 2, 3, 4, 5)", () => {
    assert.deepEqual(middle[1, 2, 3, 4, 5]), [3];
  });
  it("returns [] for [1, 2)", () => {
    assert.deepEqual(middle[1, 2]), [];
  });
});


// ORIGINAL TEST CODE USING MODULE:
// // request middle, assertArraysEqual, and eqArrays functions
// const assertArraysEqual = require('../assertArraysEqual');
// const middle = require('../middle');

// Test code:
// assertArraysEqual((middle([1, 2, 3, 4, 5, 6])),[3, 4]); // test even
// assertArraysEqual((middle([1, 2, 3, 4, 5])),[3]); // test odd
// assertArraysEqual((middle([1, 2])),[]); // test 2 items