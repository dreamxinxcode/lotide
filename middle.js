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


const assertArraysEqual = function(arr, arr2) {
  if (arr.length !== arr2.length) {
    // Using return to exit (maybe there's a better way..)
    return console.log(`🛑🛑🛑 Assertion Failed: [${arr}] !== [${arr2}]`);
  } else {
    for (let x = 0; x < arr.length; x++) {
      if (arr[x] !== arr2[x]) {
        return console.log(`🛑🛑🛑 Assertion Failed: [${arr}] !== [${arr2}]`);
      }
    }
  }
  return console.log(`✅✅✅ Assertion Passed: [${arr}] === [${arr2}]`);
};


const middle = function(arr) {
  let len = arr.length;
  let ans = [];
  if (len === 1 || len === 2) {
    return ans;
  } else if (len % 2 === 0) {
    ans.push(arr[Math.round((arr.length - 1) / 2) - 1]);
    ans.push(arr[Math.round((arr.length - 1) / 2)]);
    return ans;
  } else {
    ans.push(arr[Math.round(arr.length - 1) / 2]);
    return ans;
  }
};

assertArraysEqual(middle([1]), []);  // true
assertArraysEqual(middle([1, 2]), []);  // true
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);  // true
assertArraysEqual(middle([1, 2, 3]), [2]);  // true
assertArraysEqual(middle([1, 2, 'dog', 4, 5, 6]), ['dog', 4]);  //  true