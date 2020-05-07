/**
 * @param {number[]} nums
 * @return {number}
 * 先排序，然后最大一个和第二大之间得到第二大，以此类推得到的总和最大。
 */
var arrayPairSum = function(nums) {
    let sum = 0;
    nums.sort((a, b)=>a-b);
    nums.forEach((value, index)=>{
        if(index%2 === 0) 
            sum+=value;
    })
    return sum;
};      
