var generateParenthesis = function(n) {
    const dfs = (left, right, str) => {
        if (left === 0 && right === 0) {
            res.push(str)
            return
        }
        if (left > 0) {
            dfs(left - 1, right, str + '(')
        }
        if (right > left) {
            dfs(left, right - 1, str + ')')
        }
    }
    let res = []
    dfs(n, n, '')
    return res
};