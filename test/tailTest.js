const assert = require('chai').assert;
const tail = require('../tail');
let array = tail(["Hello", "Lighthouse", "Labs"]);

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail[1, 2, 3]), [2, 3];
  });
  it("returns [Lighthouse, Labs] for [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual(tail["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"];
  });
  it("returns [Lighthouse] for [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual((array[0]), ('Lighthouse'));
  });
  it("returns [Labs} for [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual((array[1]), ('Labs'));
  });
  it("returns 2 for [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual(array.length, 2);
  });
});



// require the tail and assertEqual functions
// const tail = require('../tail');
// const assertEqual = require('../assertEqual');

// // Test case 1: Check the returned array elements
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// // Test case 2: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!