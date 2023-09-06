/*
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Example 2:

Input: s = "   fly me   to   the     moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.

Constraints:

1 <= s.length <= 10^4
s consists of only English letters and spaces ' '.
There will be at least one word in s.
*/

function lengthOfLast(s) {
    const stringList = s.trim().split(" ")/*.filter((item) => {
        return item != "";
    });*/ // O(n + n)

    const lastWord = stringList[stringList.length-1]; // O(1)

    return lastWord.length; // O(1)
}

// O(n + n + 2)
// O(2n + 2)
// O(n)

console.log(lengthOfLast("Hello World"));
console.log(lengthOfLast("   fly me   to   the moon  "));
console.log(lengthOfLast("luffy is still joyboy"));