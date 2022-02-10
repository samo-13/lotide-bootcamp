// assertEqual function --- checks if the array variables are equal
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${actual}`);
  }
};

// assertEqual test code:
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 2);
// assertEqual("Lighthouse Labs", "Lighthouse Labs");
// assertEqual(1, 1);

/*
countOnly function
---- countOnly will be given an array and an object
---- countOnly will return an object containing the counts of everything the input object listed
---- only keys that have a truthy value should be counted
---- all other strings (set to false or not included in the object) --- NOT counted
---- if a string is meant to be counted but does not exist in the input array (f) --- NOT counted
*/

/*
Planning Notes:
---- need to know the items to count (itemsToCount) out of all of the items (allItems)
---- return how many instances (strings) of each itemsToCount (object) were found in the allItems (array of strings)
---- return the final count
-------- functions can only return one primitive data type (number, boolean, null, or string)
--------  we need it to return an object that represents a report on all the strings found in the input array, and their respective counts.
*/

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  // inside the loop,
  // increment the counter for each item:
  // set a property with that string key to:
  // the value that was already there (or zero if nothing there) with 1 added to it.
  for (const item of allItems) { // loop
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  } // end of loop
  return results;
};


// Test code
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

// Expected outcome:
// 💚💚💚 Assertion Passed: 1 === 1
// 💚💚💚 Assertion Passed: undefined === undefined
// 💚💚💚 Assertion Passed: 2 === 2
// 💚💚💚 Assertion Passed: undefined === undefined


/*
Do NOT use assertEqual to compare the resulting object (result1) directly.
--- Break test case into three different assertion checks.
--- assertEqual function can only compare primitive values.
--- We ran into this issue when comparing arrays and ended up implementing assertArraysEqual, if you recall.
--- We need to do this with objects to make our test code cleaner.
--- Until we have our specialized assertion function, we will do it this, more cumbersome way.
*/