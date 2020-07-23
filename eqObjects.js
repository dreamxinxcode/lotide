const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
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


const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key in object1) {
      // check if key/value exist in obj2
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


// const ab = {
//   a: "1",
//   b: "2",
//   c: '3'
// };
// const ba = {
//   b: "2",
//   a: "1",
//   d: '3'
// };
// eqObjects(ab, ba); // => true


const arr = {
  a: "1",
  b: "2",
  d: [1, 2, 3]
};
const arr2 = {
  b: "2",
  a: "1",
  d: [1, 2, 3]
};
console.log(eqObjects(arr, arr2)); // => true


// const obj1 = {
//   a: "1",
//   b: "2",
//   c: '3'
// };
// const obj2 = {
//   b: "2",
//   a: "1"
// };
// eqObjects(obj1, obj2); // => false

// const abc = {
//   a: "1",
//   b: "2",
//   c: "3"
// };
// eqObjects(ab, abc); // => false