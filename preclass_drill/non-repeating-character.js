/*
 Write a function that takes in a string and outputs the first occurrence of a character that does not repeat itself in that string.

 Ex:
 Input: "the quick brown fox jumps over the calm kitten quietly"
 Output: "b"

 Input: "this hat is the greatest!"
 Output: "g"

 Input: "what a wonderful day it has been!"
 Output: "o"
*/

function findFirstNonRepeatingCharacter(string) {
    const countObject = {};

    for (var i=0;i<string.length;i++) {
        const char = string[i];

        if (!countObject[char]) {
            countObject[char] = 0;
        }

        countObject[char] += 1;
    }

    for (const character in countObject) {
        if (countObject[character] === 1) {
            return character;
        }
    }
}