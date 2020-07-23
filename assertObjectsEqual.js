const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key in object1) {
      // check if key/value exist in expected
      if (object2.hasOwnProperty(key)) {
        if (Array.isArray(object2[key])) {
          if (assertArraysEqual(object1[key], object2[key])) {
            return true;
          } else {
            return false;
          }
        } else if (object2[key] !== object1[key]) {
          return false;
        } else {
          return true;
        }
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
};


const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === false) {
    return console.log(`🛑🛑🛑 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
  } else {
    return console.log(`✅✅✅ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  }
};

assertObjectsEqual({a: 1, b: 2, c: 3}, {a: 1, b: 2, c: 3}); // true
assertObjectsEqual({a: 1, b: 2, c: 2}, {a: 2, b: 2, c: 2}); // false
assertObjectsEqual({a: 1, b: [1, 2, 3], c: 2}, {a: 1, b: [1, 2, 3], c: 2}); // true
assertObjectsEqual({a: 1, b: [1, 2, 3], c: 2}, {a: 1, b: [1, 2, 2], c: 2}); // false
