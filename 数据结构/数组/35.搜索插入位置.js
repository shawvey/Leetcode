/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var pos = nums.length;
    for (let i = 0; i<nums.length; i++){
        if (nums[i]==target){
            pos = i;
            break;
        }
        if (target<nums[i]){
            pos = i;
            break;
        }
    }
    return pos;
};