/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let pre = 0, maxValue = nums[0];
    nums.forEach((x) => {
        pre = Math.max(pre + x, x);
        maxValue = Math.max(maxValue, pre);
    });
    return maxValue;
};