// require eqObjects and assertEqual functions
const eqObjects = require('../eqObjects');
const assertEqual = require('../assertEqual');


// Test code:
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true
assertEqual(eqObjects(ab, ba), true);
