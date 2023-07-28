/*
Write a function that takes in a number and reverses the order of the digits.

Ex:
Input: 1234
Output:4321

Input: 1201
Output:1021

Input: 4
Output: 4
*/

// 5n + 3c
// 5n
// n
// o(n)
function reverseNum(inputNumber) {
    const inputString = `${inputNumber}`; // n
    const inputArray = inputString.split(""); // n

    const resultArray = []; // c
    for (let i=inputArray.length-1;i>=0;i--) { // n
        resultArray.push(inputArray[i]); // c
    }
    const resultString = resultArray.join(""); // n
    const resultNumber = parseInt(resultString); // n

    return resultNumber; // c
}

// 5n + c
// n
// o(n)
function reverseNum2(inputNumber) {
    const inputString = `${inputNumber}`; // n
    const inputArray = inputString.split(""); // n
    const resultArray = inputArray.reverse(); // n
    const resultString = resultArray.join(""); //n 
    const resultNumber = parseInt(resultString); // n

    return resultNumber; // c
}

const foo = "bar";

for (let i=0;i<foo.length;i++) {
    for (let j=0;j<foo.length;j++) {

    }
}

console.log(reverseNum2(1234));

// find the least common 5 letter words in the english language
// what 5 letter words use the most amount of lesser used letters