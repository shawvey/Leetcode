var mirrorTree = function(root) {
    if (!root) return null
    let copy = root.right
    root.right = root.left
    root.left = copy
    mirrorTree(root.right)
    mirrorTree(root.left)
    return root
}