var findNumberIn2DArray = function(matrix, target) {
    if (matrix == null || matrix.length === 0) {
        return false;
    }
    let rows = matrix.length; // 行数
    let cols = matrix[0].length; // 列数
    let rowsStarts = 0;
    let colsStarts = cols - 1;
    while (rowsStarts < rows && colsStarts >= 0) {
        let temp = matrix[rowsStarts][colsStarts];
        if (temp > target) {
            colsStarts--;
        }
        if (temp < target) {
            rowsStarts++;
        }
        if (temp === target) {
            return true;
        }
    }
    return false;
};