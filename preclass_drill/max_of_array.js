/*Write a function that takes in an array of numbers and outputs the maximum number.

Ex:
Input: [ 1, 2, 3 ]
Output: 3

Input: [ 3, 6, 4, 5, 2, 1 ]
Output: 6

Input: [ 3, 3, 3 ]
Output: 3*/

// how to solve as human:
// go over each element one at a time. If that element is bigger than the biggest element
// we've seen so far, then remember it as the biggest element

function getMax(array) {
    var largestNumber = array[0];
    for (var i=0;i<array.length;i++) {
        var arrayElement = array[i];

        // If that element is bigger than the biggest element we've seen so far
        if (arrayElement > largestNumber) {
            // then remember it as the biggest element
            largestNumber = arrayElement;
        }
    }

    return largestNumber;
}

getMax([ 1, 2, 3 ]);
getMax([ 3, 6, 4, 5, 2, 1 ]);