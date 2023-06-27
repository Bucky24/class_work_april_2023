/*
Write a function that takes in a number and returns the corresponding day of the week.

Ex:
Input: 1
Output: 'Monday'

Input: 5
Output: 'Friday'

Input: 8
Output: undefined
*/

function getDayOfWeek(number) {
    var days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];

    if (number >= 0 && number < days.length) {
        return days[number];
    }

    var result = undefined;
    switch (number) {
        case 0:
            result = 'Sunday';
            break;
        case 1:
            result = 'Monday';
            break;
        case 2:
            result = 'Tuesday';
            break;
        case 3:
            result = 'Wednesday';
            break;
    }

    return result;
}

console.log(getDayOfWeek(1));
console.log(getDayOfWeek(5));
console.log(getDayOfWeek(8));