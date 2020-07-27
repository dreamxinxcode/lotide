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

module.exports = middle;
