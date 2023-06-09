/*
Write a function that takes an array of integers as an input and outputs the first duplicate.

Ex:
Input: [ 2, 5, 6, 3, 5 ]
Output: 5

Input: [ 1, 3, 4, 1, 3, 4 ]
Output: 1

Input: [ 2, 4, 5 ]
Output: undefined
*/

function getDuplicate(array) {
    var seenNumbers = [];
    for (var i=0;i<array.length;i++) {
        var numToCheck = array[i];

        if (seenNumbers.includes(numToCheck)) {
            return numToCheck;
        }

        seenNumbers.push(numToCheck);

        /*for (var j=i+1;j<array.length;j++) {
            var num = array[j];

            if (numToCheck == num) {
                return num;
            }
        }*/
    }
}

console.log(getDuplicate([ 2, 5, 6, 3, 5 ]))
console.log(getDuplicate([ 1, 3, 4, 1, 3, 4 ]));
console.log(getDuplicate([ 2, 4, 5 ]));