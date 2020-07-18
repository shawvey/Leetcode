var spiralOrder = function(matrix) {
    var res = []
    let flag = true
    while(matrix.length) {
        // 从左到右
        if(flag){
            res = res.concat(matrix.shift())
            for(let i=0; i<matrix.length; i++){
                matrix[i].length && res.push(matrix[i].pop())
            }
        // 从右到左   
        } else {
           	res = res.concat(matrix.pop().reverse()) 
            for(let i=matrix.length - 1; i> 0; i--){
               matrix[i].length && res.push(matrix[i].shift())
            }
        }
        flag = !flag
    }
    return res
};