const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;




assertArraysEqual(middle([1]), []);  // true
assertArraysEqual(middle([1]), [2]);  // false
assertArraysEqual(middle([1, 2, 'dog', 4, 5, 6]), ['dog', 4]);  //  true
assertArraysEqual(middle([1, 2, 'dog', 4, 5, 6]), ['dog']);  //  false
assertArraysEqual(middle([1, 2, 'dog', 4, 5, 6]), ['dog', 4]);  //  true