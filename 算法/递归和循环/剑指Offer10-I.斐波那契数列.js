var fib = function(n) {
    if(n===0) return 0;
    if(n===1) return 1;
    let pre = 0;
    let res = 1;
    for(let i=1; i<n; i++){
        let flag = pre;
        pre = res;
        res = (flag + res)%1000000007;
    }
    return res;
};