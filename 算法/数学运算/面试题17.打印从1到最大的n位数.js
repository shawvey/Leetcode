var printNumbers = function(n) {
    let maxLen = Math.pow(10, n)-1
    var result = []
    for(let i=1;i<=maxLen;i++){
        result.push(i)
    }
    return result
};