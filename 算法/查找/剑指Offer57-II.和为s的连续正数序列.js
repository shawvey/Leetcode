var findContinuousSequence = function(target) {
    let left = 1
    let right = 1
    let sum = 0 
    let res =[]
    while(left<=Math.round(target/2)){
        if(sum===target){ 
            let temp = []
            for(let i=left;i<right;i++){
                temp.push(i)
            }
            res.push(temp)
            sum -=left
            left++             
        }
        else if(sum>target){
            sum -= left
            left++
        }
        else if(sum<target){
            sum += right
            right++
        }
    }
    return res
};