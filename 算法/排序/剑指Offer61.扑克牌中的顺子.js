var isStraight = function(nums) {
    let a = 0, b = 0;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            a++;
        }
        else {
            if (nums[i + 1] - nums[i] > 1) {
                b += nums[i + 1] - nums[i] - 1
            }
            else if (nums[i + 1] == nums[i]){
                return false;
            }
        }
    }
    return a >= b ? true : false;
};