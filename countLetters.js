const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};


const countLetters = function(str) {
  let ans = {};
  // loop
  let newStr = str.split(' ').join('');
  for (let char of newStr) {
    if (ans[char]) {
      ans[char] += 1;
    } else {
      ans[char] = 1;
    }
  }
  return ans;
};

const obj = {};
obj.dog = '';
console.log(obj);
console.log(countLetters('HELLO World'));