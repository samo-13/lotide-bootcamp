// request middle, assertArraysEqual, and eqArrays functions
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// Test code:
assertArraysEqual((middle([1, 2, 3, 4, 5, 6])),[3, 4]); // test even
assertArraysEqual((middle([1, 2, 3, 4, 5])),[3]); // test odd
assertArraysEqual((middle([1, 2])),[]); // test 2 items