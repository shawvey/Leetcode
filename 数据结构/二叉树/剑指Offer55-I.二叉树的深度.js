var maxDepth = function(root) {
    if(!root) return 0
    let max = 0
    function CalDepth(node,d){
        if(!node.right&&!node.left){
            if(max<d+1){
                max = d+1
            }
        }
        if(node.right) CalDepth(node.right,d+1)
        if(node.left) CalDepth(node.left,d+1)
    }
    CalDepth(root,0)
    return max
};