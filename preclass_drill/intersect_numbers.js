/*
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
*/

function intersection(nums1 /* N */, nums2 /* M */) {
    const processed = {};
    const output = [];

    for (const item of nums1) { // O(N)
        if (processed[item]) {
            continue;
        }

        if (nums2.includes(item)) { // O(M)
            output.push(item);
        }

        processed[item] = true;
    }

    return output;
}

// O(N*M)

console.log(intersection([1,2,2,1], [2, 2]));
console.log(intersection([4,9,5], [9,4,9,8,4]));