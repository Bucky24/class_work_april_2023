/*
Write a function that takes in a string and returns true if it's a pangram or false otherwise.
Pangram: a sentence that contains every letter in the alphabet.

Ex:
Input: "Watch Jeopardy, Alex Trebek's fun TV quiz game"
Output: true

Input: "Five hexing wizard bots jump quickly"
Output: true

Input: "JavaScript is the best"
Output: false*/

function isPanagram(string) {
    string = string.toLowerCase();

    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    var characters = new Set();

    for (var i=0;i<string.length;i++) {
        var char = string[i];

        // if we haven't seen this before, and it's an alphabet character
        if (alphabet.includes(char)) {
            characters.add(char);
        }
    }

    // if we found ever letter, then we will have the same length as the alphabet
    var didWeFindItAll = alphabet.length === characters.size;

    return didWeFindItAll;
}

console.log(isPanagram("Watch Jeopardy, Alex Trebek's fun TV quiz game"));
console.log(isPanagram("Five hexing wizard bots jump quickly"));
console.log(isPanagram("JavaScript is the best"));