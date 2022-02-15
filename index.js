const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const takeUntil = require('./takeUntil');
const without = require('./without');
const map = require('./map');
const findKeyByValue = require('./findKeyByValue');
const findKey = require('./findKey');
const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArrays');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const assertObjectsEqual = require('./assertObjectsEqual');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');

module.exports = {
  head, tail, middle, without, takeUntil, map, findKeyByValue, findKey, eqObjects, eqArrays, countOnly, countLetters, assertObjectsEqual, assertEqual, assertArraysEqual
};