// Require the assertEqual and head functions
const head = require('../head');
const assertEqual = require('../assertEqual');

// Test code
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");