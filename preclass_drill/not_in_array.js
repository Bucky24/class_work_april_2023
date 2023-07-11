/*
  Write a function that takes 2 parameters - the first is an array, the second is an element that may or may not be in the array. 
  Without using any built in array methods, return true if the element is in the array or false otherwise. 
  . 

  Ex:
  Input: [1,2,3]  1
  Output: true

  Input: [1,2,3]  4
  Output: false

  Input: ['code', 'dev', 'nerd']  'nerd'
  Output: true

  Input: ['code', 'dev', 'nerd']  'genius'
  Output: false
*/

function isInArray(array, element) {
    for (const elementOfArray of array) {
        if (elementOfArray === element) {
            return true;
        }
    }

    return false;
}

console.log(isInArray([1,2,3], 1));
console.log(isInArray([1,2,3], 4));