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