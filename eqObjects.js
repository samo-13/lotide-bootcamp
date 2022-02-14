// the eqObjects function Returns true if both objects have identical keys with identical values
// otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key of Object.keys(object1)) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;

/* const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, ba), false);
 */

// References:
// ---- Object.entries()
// -------- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
// ---- Object.keys()
// -------- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys