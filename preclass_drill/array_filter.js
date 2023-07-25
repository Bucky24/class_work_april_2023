/*
  Write a function that takes an array of numbers and a function as parameters. The function parameter should return true if the input meets a certain condition or false otherwise. Your function should return true if the function parameter returns true for _any_ of the array elements in the array parameter or false otherwise.
  Ex:
  Input: [1,2,3]  function(num){return num === 2}
  Output: true
  Input: [1,5,3]  function(num){return num === 2}
  Output: false
  Input: [1,2,3]  function(num){return num % 2 === 0}
  Output: true
  Input: [1,5,3]  function(num){return num % 2 === 0}
  Output: false
*/

function filter(array, cb) {
    for (const element of array) {
        if (cb(element)) {
            return true;
        }
    }

    return false;
}

// all elements that are true
function filter2(array, cb) {
    const results = [];
    for (const element of array) {
        if (cb(element)) {
            results.push(element);
        }
    }

    return results;
}

console.log(filter2([1,2,3], function(num){return num === 2}));
console.log(filter2([1,5,3], function(num){return num === 2}));