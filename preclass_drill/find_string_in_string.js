/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Example 2:

Input: haystack = "leetcode", needle = "code"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
*/

function findStringInString(needle, haystack) {
    for (let i=0;i<haystack.length;i++) {
        const substring = haystack.slice(i, i+needle.length);
        if (substring === needle) {
            return i;
        }
    }

    return -1;
}

console.log(findStringInString("sad", "sadbutsad"));
console.log(findStringInString("code", "leetcode"));