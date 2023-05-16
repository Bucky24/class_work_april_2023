/*
Write a function that takes in two numbers and outputs the max (the greater of the two numbers).
Ex:
Input: 1, 2
Output: 2
Input: 6, -4
Output: 6
Input: 3.4, 2
Output: 3.4
*/

function maxNumbers(a, b) {
    /*if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        return a;
    }*/
    return Math.max(a, b);
}

console.log(maxNumbers(-5, 6));
console.log(maxNumbers(15, 6));
console.log(maxNumbers(0, 0));
console.log(maxNumbers(6, 6));