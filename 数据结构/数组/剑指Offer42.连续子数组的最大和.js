var maxSubArray = function(nums) {
    let max = nums[0]
    for (let i = 1; i < nums.length; ++i) {
        if (nums[i - 1] > 0) {
            nums[i] += nums[i - 1]
        }
        if (nums[i] > max) {
            max = nums[i]
        }
    }
    return max
};