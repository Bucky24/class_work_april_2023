/*
Write a function that takes an array of numbers and returns an array with each number doubled. 

  Ex:
  Input: [1,2,3]
  Output: [2,4,6]

  Input: [-1,-2,-3]
  Output: [-2, -4, -6]
*/

function doubleArray(array) {
    const output = [];
    for (let i=0;i<array.length;i++) {
        const element = array[i];
        output.push(element * 2);
    }

    return output;

    const output = [];
    for (const element of array) {
        output.push(element * 2);
    }

    return output;

    return array.map(e => e*2);
}

console.log(doubleArray([1,2,3]));