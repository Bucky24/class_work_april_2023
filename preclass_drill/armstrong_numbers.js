/*
// Write a function that takes a positive integer and returns true if the integer is an armstrong number,
// else return false. To find out if a number is an armstrong number,
// take each individual digit and raise it to the power of the length of the entire number and add the digits.
// If the sum equals the original number, the number is an armstrong number"
// TODO: Complete the function below:
123

1^3 = 1
2^3 = 8
3^3 = 27

153

1^3 = 1
5^3 = 125
3^3 = 27
*/

var isArmstrong = function(num) {
    // get digits
    const digits = `${num}`.split("").map((char) => parseInt(char));

    // raise to the power of number length
    const multiplied = digits.map((digit) => {
        return Math.pow(digit, digits.length);
    });

    // add all sums together
    const sum = multiplied.reduce((acc, num) => {
        return acc + num;
    }, 0);

    // check if it's equal
    return sum === num;
};


console.log(isArmstrong(123));
console.log(isArmstrong(153));