var matrixReshape = function(nums, r, c) {
    let a = nums.length   // 行数 
    let b = nums[0].length   //列数
    let res = []
    let temp = []
    nums.forEach(item => {
        item.forEach(v => {
             temp.push(v)   //弄成一维数组
        })
    })
    if((a*b) == (r*c) ){
        for(let i = 0; i < r; i++){ //行
            res.push(temp.splice(0,c))  //列
        }
        return res
    }else { //代表数量不一致，返回原数组nums
        return nums
    }
};