/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
*/

function moveZerosToEnd(nums) {
    let lengthOfArray = nums.length;
    for (let i=0;i<lengthOfArray;i++) { //O(n)
        if (nums[i] === 0) {
            nums.splice(i, 1); // O(n)
            nums.push(0);

            i --;
            lengthOfArray --;
        }
    }

    return nums;
}

// O(n^2)

console.log(moveZerosToEnd([0,1,0,3,12]));
console.log(moveZerosToEnd([0,1,0,0,3,12]));
console.log(moveZerosToEnd([0,1,0,0,3,12,0]));