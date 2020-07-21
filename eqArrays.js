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

assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 222, 3], [1, 2, 3]), false);