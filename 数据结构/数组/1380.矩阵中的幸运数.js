/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
    let LuckyNum = [];
    let fun = (min, y) => {
        for (var x = 0; x < matrix.length; x++) {
            if (x != i && min < matrix[x][y]) {
                return false
            }
        }
    }
    for (var i = 0; i < matrix.length; i++) {
        let min = Math.min(...matrix[i])
        let y = matrix[i].indexOf(min)
        if (!(fun(min, y) === false)) {
            LuckyNum.push(min)
        }
    }
    return LuckyNum
};