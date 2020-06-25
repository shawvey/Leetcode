var majorityElement = function(nums) {
    let count = 1;
    let major_num = nums[0];
    for(let i = 1; i < nums.length; i++) {
        if(count==0){
            major_num = nums[i]
        }
        if(nums[i]==major_num){
            count++
        }
        else{
            count--
        }
    }
    return major_num;
};