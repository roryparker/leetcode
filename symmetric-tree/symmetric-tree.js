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
 * @return {boolean}
 */


const isSymmetric = function(root) {
    if(!root) return true;                                               // if it's not the root node, return true
    function mirror(brokenGlassA, brokenGlassB){         // Setup another function with two parameters 
        if(!brokenGlassA && !brokenGlassB) return true;  // If not broken glass A or B, return true
        if(!brokenGlassA || !brokenGlassB || brokenGlassA.val !== brokenGlassB.val) return false;  // If not broken glass A, B, or the pieces don't match, return false
        return mirror(brokenGlassA.left,brokenGlassB.right) && mirror(brokenGlassA.right, brokenGlassB.left);
    }
    return mirror(root.left, root.right);
};