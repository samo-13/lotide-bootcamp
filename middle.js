/*
Middle Function
---- return an array with only the middle element(s) of the provided array. 
---- the length of the returned elements could vary.
---- arrays with one or two elements (no middle) - return an empty array.
---- arrays with odd number of elements, an array containing a single middle element should be returned.
---- arrays with an even number of elements, an array containing the two elements in the middle should be returned
*/

/*
Planning Notes:
---- determine even or odd number of array items (% Modulo)
---- if array.length <= 2 return an empty array
---- if even print the middle two numbers (e.g., if 6 you will print array i[3, 4])
---- if odd just print the middle number (example: 5 print the i[3])
---- return the final array at the end
*/

let middle = function (startingArray) {
  if (startingArray.length <= 2) {
    return [];
  }
  else if (startingArray.length % 2 !== 0) {
    let odd = 0;
    for (i = 0; i < startingArray.length; i++) {
      startingArray[i] === startingArray[(startingArray.length - 1) / 2] && (odd = startingArray[i]);
    }
    return [odd]
    // let odd = startingArray.length
    // return ['odd'];
  }
  else {
    let first = startingArray.length / 2 - 1;
    let second = startingArray.length / 2;
    return [startingArray[first], startingArray[second]];
  }
};

module.exports = middle;
