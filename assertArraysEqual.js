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

module.exports = assertArraysEqual;