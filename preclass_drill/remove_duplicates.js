/*
Write a function that takes in an array of integers and returns the array with duplicates removed

Ex:
Input: [1,2,2,3]
Output: [1,2,3]

Input: [4,5,4,4,7,5]
Output: [4,5,7]

Input: [1,2,3,5]
Output: [1,2,3,5]
*/

function removeDuplicates(input) {
    const outputSet = new Set(input);

    return Array.from(outputSet);
}

console.log(removeDuplicates([1,2,2,3]));
console.log(removeDuplicates([4,5,4,4,7,5]));
