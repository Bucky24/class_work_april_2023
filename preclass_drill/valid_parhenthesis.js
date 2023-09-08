/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false


Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

function isValidParhenthsis(string) {
    const stack = [];
    for (const char of string) {
        if (char === "(" || char === "[" || char === "{") {
            // push to stack
            stack.push(char);
        } else {
            // pop from stack
            // what we just popped must be the inverse of what we are looking at
            // stack: (, [, (, [, {
            // and my character is }
            // string: ([([{}????
            const popped = stack.pop();
            if (
                (char === "]" && popped !== "[") ||
                (char === "}" && popped !== "{") ||
                (char === ")" && popped !== "(")
            ) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isValidParhenthsis("()"));
console.log(isValidParhenthsis("()[]{}"));
console.log(isValidParhenthsis("(]"));
console.log(isValidParhenthsis("([)]"));
console.log(isValidParhenthsis("([([])])"));
console.log(isValidParhenthsis("(()"));