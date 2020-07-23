const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    let ans = callback(item);
    results.push(ans);
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

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


assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);  // true
assertArraysEqual(map(words, word => word[1]), [ 'r', 'o', 'o', 'a', 'o' ]);  // true
assertArraysEqual(map(words, word => word[1]), [ 'r', 3, 'o', 'a', 'o' ]);  // false

assertArraysEqual(map(words, word => word.length), [ 6, 7, 2, 5, 3 ]);  // true
assertArraysEqual(map(words, word => word += 1), [ 'ground1', 'control1', 'to1', 'major1', 'tom1']);  // true
