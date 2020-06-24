var findRepeatNumber = function(nums) {
    for(let i=0;i<nums.length-1;i++){
        let special=nums[i]
        for(let j=i+1;j<nums.length;j++){
           while(special===nums[j]){
               return special
           } 
        }
    }
};