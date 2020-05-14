/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let init = [...heights]
    let list = heights.sort((n,m)=>n-m)
    let nums = 0
    list.forEach((item,index)=>{
      if(item != init[index]){
        ++nums
      }
    })
    return nums
};