/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

Example 1:

Input: nums = [2,2,1]
Output: 1

Example 2:

Input: nums = [4,1,2,1,2]
Output: 4

Example 3:

Input: nums = [1]
Output: 1

Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.
*/

function findNonDup(nums) {
    const foundNums = {};

    for (let i=0;i<nums.length;i++) {
        const num = nums[i];
    }

    for (const num of nums) { // O(n)
        if (!foundNums[num]) {
            foundNums[num] = true;
        } else {
            delete foundNums[num];
        }
    }

    return Object.keys(foundNums)[0]; // O(n)
}

console.log(
    findNonDup(
        [2,2,1]
    )
);
console.log(findNonDup([4,1,2,1,2]));