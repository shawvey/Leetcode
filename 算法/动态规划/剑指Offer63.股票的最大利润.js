var maxProfit = function(prices) {
    let profits = 0;
    let min = prices[0];
    for(let i = 1; i < prices.length; i ++) {
        min = Math.min(min, prices[i]);
        profits = Math.max(profits, prices[i] - min);
    }
    return profits;
};