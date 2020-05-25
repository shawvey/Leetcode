/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    var sortarray = [...nums].sort((a, b)=>a-b)
    let left = 0
    let right = 0
    let length = 0
    for(let i = 0; i<nums.length; i++){
        if(nums[i] != sortarray[i]){
            left = i
            break
        }
    }
    for(let i = (nums.length-1); i>=0; i--){
        if(nums[i] != sortarray[i]){
            right = i+1
            break
        }
    }
    length = right - left
    return length
};