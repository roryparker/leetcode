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

const isBalanced = function(root) {
  return treeHeight(root) !== -1; // returns the root if it does not = -1
};

function treeHeight(node) {
  if (node === null) return 0;
  let leftSideOfTree = treeHeight(node.left), rightSideOfTree = treeHeight(node.right);
  if (leftSideOfTree === -1 || rightSideOfTree === -1 || Math.abs(leftSideOfTree - rightSideOfTree) > 1) return -1;
    
  return Math.max(leftSideOfTree, rightSideOfTree) + 1;
}