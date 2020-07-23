const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const eqArrays = function (arr, arr2) {
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
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (!object1[key] === object2[key]) {
      return false;
    }
  }
  return true;
};

const arr = {
  a: "1",
  b: "2",
  c: [1, 2, 3]
};
const arr2 = {
  a: "1",
  b: "2",
  c: [1, 2, 3]
};
console.log(eqObjects(arr, arr2)); // => true


const arrr = {
  a: "1",
  b: "2",
  c: [1, 2, 3]
};
const arrr2 = {
  a: "1",
  b: "2",
  c: [1, 3, 3]
};
console.log(eqObjects(arrr, arrr2)); // => false

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