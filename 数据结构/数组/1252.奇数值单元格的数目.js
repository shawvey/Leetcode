/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
    let rows = new Array(n).fill(0)
    let cols = new Array(m).fill(0)
    for(let i = 0;i < indices.length; i++){
        let rowIndex = indices[i][0]
        let colIndex = indices[i][1]
        rows[rowIndex]++
        cols[colIndex]++
    }
    let count = 0
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if((rows[i] + cols[j]) % 2 != 0){
                count++
            }
        }
    }
    return count
};
