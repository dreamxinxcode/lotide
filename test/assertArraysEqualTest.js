const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]);  // true
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]);  // false
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);  // false
assertArraysEqual([1, 2, 3], [1, 2, 4]);  //  false

assertArraysEqual([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]); //true
assertArraysEqual([1, 2, 3, 4, 5], [1, 2, 3, 4, 6]); //false
assertArraysEqual(['dog', 'cat', 10, true, undefined], ['dog', 'cat', 10, true, undefined]); //true
assertArraysEqual(['dog', 'cat', 12, true, undefined], ['dog', 'cat', 10, true, undefined]); //true
