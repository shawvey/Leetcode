/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    var max = Math.max(...candies)
    var results = []
    for (let i = 0;i<candies.length;i++){
        if(candies[i]+extraCandies>= max)
            results[i]=true
        else
            results[i]=false
    }
    return results
};
