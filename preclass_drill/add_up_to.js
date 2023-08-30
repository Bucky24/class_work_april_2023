/*
PRE-CLASS DRILL
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
*/

function whatever(nums, target) {
    for (let i=0;i<nums.length;i++) { // O(n)
        for (let j=i+1;j<nums.length;j++) { // O(n)
            if (nums[i] + nums[j] === target) { // O(1)
                return [i, j]; // O(1)
            }
        }
    }

    return null;
}

// O(n*n*(1 + 1))
// O(n^2*2)
// O(n^2)

console.log(whatever([2,7,11,15], 13));
console.log(whatever([3,2,4], 6));