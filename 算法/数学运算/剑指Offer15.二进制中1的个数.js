var hammingWeight = function(n) {
    let str = n.toString(2)
    let count = 0;
    for(let i=0;i<str.length;i++){
        if(str[i]==1){
            count+=1
        }
    }
    return count
};