// Write code to create a function that accepts a number and returns true if the number is a perfect square, otherwise it returns false.
// 4, 9, 16
// You may not use the built-in Math.sqrt method

var isPerfectSquare = function(num) {
    for (let i=1;i<=num;i++) {
        const checkSum = i * i;

        if (checkSum === num) {
            return true;
        }

        if (checkSum > num) {
            break;
        }
    }

    return false;
};

console.log(isPerfectSquare(1));
console.log(isPerfectSquare(4));
console.log(isPerfectSquare(9));
console.log(isPerfectSquare(16));
console.log(isPerfectSquare(5));
console.log(isPerfectSquare(10));
