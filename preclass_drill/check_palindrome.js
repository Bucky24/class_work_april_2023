/*
1. Make a function expression.
2. Loop through the string.
3. Compare the first and last letters and return false if not equal.
4. Compare the second and second from last letters and return false if not equal.
5. Continue in this manner until all letters are checked.
6. After all letters are checked, return true.
*/

function checkPalindrome(string) {
    for (var i=0;i<string.length/2;i++) {
        var firstLetter = string.at(i);
        var lastLetter = string.at(string.length-1-i);

        if (firstLetter !== lastLetter) {
            return false;
        }
    }

    return true;
}

var equal1 = checkPalindrome("abcba");
console.log(equal1);
var equal2 = checkPalindrome("Robbert");
console.log(equal2);

// abcba
// ^   ^
//  ^ ^
//   ^