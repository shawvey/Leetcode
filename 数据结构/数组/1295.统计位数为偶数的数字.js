/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    var count = 0
    for (let i=0;i<nums.length;i++){
        if((nums[i].toString().length %2) ==0){
            count++
        }
    }
    return count
};