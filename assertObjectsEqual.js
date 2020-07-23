const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const eqArrays = function(arr, arr2) {
  if (arr.length !== arr2.length) {
    return false;
  } else {
    for (let x = 0; x < arr.length; x++) {
      if (arr[x] !== arr2[x]) {
        return false;
      }
    }
  }
  return true;
};


const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {
    if (object1[key].length !== object2[key].length) {
      return false;
    } else if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
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
