var twoSum = function(nums, target) {
     let len = nums.length
     let right = len-1, left = 0
     while(nums[left]+nums[right]!==target){
         if(nums[left]+nums[right]>target){
             right--
         }
         if(nums[left]+nums[right]<target){
             left++
         }
     }
     return [nums[left],nums[right]]
};