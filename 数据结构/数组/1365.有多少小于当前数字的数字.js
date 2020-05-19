/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    var count = []
    for(let i=0;i<nums.length;i++){
        var eachcount=0
        for(let j=0;j<nums.length;j++){
            if(nums[i]>nums[j]){
                eachcount+=1
            }
        }
        count.push(eachcount)
    }
    return count
};