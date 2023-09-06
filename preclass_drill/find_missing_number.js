/*
Exercise: Find Missing Number

You are given an array containing n distinct numbers taken from the range 0 to n (inclusive). However, one number is missing from the array. Your task is to write a function that finds and returns the missing number.

Write a function called findMissingNumber that takes an array of integers as an argument and returns the missing number.

For example, given the array [3, 0, 1], the function should return 2, as 2 is the missing number in the range 0 to 3.
*/

function findMissingNumber(integers) {
    const n = integers.length; // O(1)

    const integersCopy = [...integers]; // O(n)
    integersCopy.sort(); // O(n log n)

    for (let i=1;i<n;i++) { // O(n)
        if (integersCopy[i] != integersCopy[i-1] + 1) { // O(1)
            return integersCopy[i-1] + 1; // O(1)
        }
    }

    return n; // O(1)
}

// O(1 + n + n log n + n + n + n +1)
// O(4n + n log n + 2)
// O(n + n log n)
// O(n ( 1 + log n))
// O(n(log n))
// O(n log n)

console.log(findMissingNumber([3, 0, 1]));

console.log(findMissingNumber([2, 0, 1]));