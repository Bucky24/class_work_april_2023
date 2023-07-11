/*
Write a function that takes in a string and if the string is a string representation of a number, return the negative version of that number otherwise throw an Error.

Ex:
Input: '1'
Output: -1

Input: '4'
Output: -4

Input: 'cow'
Error
*/

function getReverseNumber(string) {
    const number = parseInt(string);

    if (isNaN(number)) {
        throw new Error("Not a number");
    }

    return number*-1;
}

console.log(getReverseNumber("2"));
console.log(getReverseNumber("-4"));
getReverseNumber("cow");