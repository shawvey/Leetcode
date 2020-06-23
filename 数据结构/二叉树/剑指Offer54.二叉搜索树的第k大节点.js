var kthLargest = function(root, k) {
    let result = null;

    function dfs(root) {
        if (!root || k <= 0) {
            return;
        }
        dfs(root.right)
        k--;
        if (!k) {
            result = root.val;
            return;
        }
        dfs(root.left);
    }

    dfs(root);

    return result;
};