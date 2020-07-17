var translateNum = function(num) {
    if (num == 0) 
        return 1;
    let str = num.toString();
    const length = str.length;
    let dp = new Array(length).fill(0);
    dp[0] = 1;
    for(let i = 1; i < length; i++){
        let temp = Number(str[i-1] + str[i]);//获取数字类型
        if (temp >=10 && temp <= 25){
            if (i == 1)
                dp[i] = 1 + dp[i-1];
            else 
                dp[i] = dp[i-1] + dp[i-2];
        }
        else {
            dp[i] = dp[i-1];
        }
        console.log(dp[i])
    }
    return dp.pop(); //返回最后一个元素
};