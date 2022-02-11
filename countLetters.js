// assertEqual function --- checks if the array variables are equal
/* const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${actual}`);
  }
}; */

// assertEqual test code:
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 2);
// assertEqual("Lighthouse Labs", "Lighthouse Labs");
// assertEqual(1, 1);

/*
countLetters function
---- countLetters to take a sentence (string) and return a count of each letter in the sentence
---- EXAMPLE: 'LHL' shoule print 2 L's and 1 H
---- How will it return these counts?
-------- we don't want to know how many H's are in the sentence, we need it to report multiple numbers
-------- return an OBJECT where each unique character in the string is a property
-------- the value for each PROPERTY/KEY is the number of counts for that CHARACTER
-------- make sure to skip spaces in a sentence
*/

/*
Planning Notes:
---- use a for...of loop with strings

Syntax
for (variable of iterable) {
  statement
}

variable = On each iteration a value of a different property is assigned to variable. variable may be declared with const, let, or var.
iterable = Object whose iterable properties are iterated.
*/

const countLetters = function(sentence) {
  let letterTotal = {};

  for (let letter of sentence) {
    if (letter !== ' ') { // if letter does not equal a space continue on
      if (letterTotal[letter]) {
        letterTotal[letter] += 1;
      } else {
        letterTotal[letter] = 1;
      }
    }
  }
  return letterTotal;
};

console.log(countLetters("lighthouse in the house"));

// Expected outcome:
/* {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
} */


// Resources:
// for...of loops:
// --- https://stackoverflow.com/questions/29885220/using-objects-in-for-of-loops
// --- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of#iterating_over_a_string