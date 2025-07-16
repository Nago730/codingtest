/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const reverse = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        const diff = reverse[target - num]
        if (diff !== undefined) return [diff, i];
        if (!reverse[num]) reverse[num] = i;
    }
};