const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const takeUntil = function(array, callback) {
  let results = [];
  for (let item of array) {
    console.log('item = ', item);
    if (!callback(item)) {
      results.push(item);
    } else {
      console.log('break');
      break;
    }
  }
  return results;
};

console.log(takeUntil(data1, x => x < 0));

// Implement takeUntil which will keep collecting items from 
// a provided array until the callback provided returns a truthy value. 