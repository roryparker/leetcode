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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const box = []
    
    function post(root){
        if(!root)
            return null;
        
        post(root.left)               // Left Sub Tree Visit
        box.push(root.val)            // Node Visit
        post(root.right)              // Right Sub Tree Visit
        
    }
    
    post(root)
    return box
};