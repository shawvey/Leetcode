var subtractProductAndSum = function(n) {
    let m = n.toString(10); 
    let multiple = 1;
    let sum = 0;
    for(let i=0; i<m.length; i++) {
        sum += m[i]*1;
        multiple *= m[i];
    }
    return multiple - sum;
};