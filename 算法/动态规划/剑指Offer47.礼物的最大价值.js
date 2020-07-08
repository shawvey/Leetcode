var maxValue = function(grid) {
    let rows = grid.length
    let cols = grid[0].length
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (i - 1 >= 0 && j - 1 >= 0) {
                grid[i][j] += Math.max(grid[i - 1][j], grid[i][j - 1])
            } else if (i - 1 >= 0) {
                grid[i][j] += grid[i - 1][j]
            } else if (j - 1 >= 0) {
                grid[i][j] += grid[i][j - 1]
            }
        }
    }
    return grid[rows - 1][cols - 1]
};