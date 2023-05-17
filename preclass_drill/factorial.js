/*
Write a function that takes in an integer and outputs the sum of all the numbers from 1 to that integer.

Ex:
Input: 2
Output: 3 (because 1 + 2 = 3)

Input: 4
Output: 10  (because 1 + 2 + 3 + 4 = 10)

Input: 10
Output: 55
*/

function factorial(num) {
    // create a value to store our sum
    var sum = 0;
    // go from 1 to num with a loop
    for (let i=1;i<=num;i++) {
        // each time we loop, add our current number to the sum
        sum += i;
    }

    // finally return our sum
    return sum;
}

var sum1 = factorial(2);
console.log(sum1);
var sum2 = factorial(4);
console.log(sum2);
var sum3 = factorial(20);
console.log(sum3);