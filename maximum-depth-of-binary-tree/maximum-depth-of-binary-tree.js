/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function(root) {
    if (root == null) return 0;
    
    const howDeepOnLeft = maxDepth(root.left);      // create variables representing the depth of both the left and right side of the tree.
    const howDeepOnRight = maxDepth(root.right);
    
    return Math.max(howDeepOnLeft, howDeepOnRight) + 1;
};

