/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

// var sortedArrayToBST = function(nums) {
    
//     const numsReverse = nums.reverse();
//     const numsForward = nums
    
//     return numsReverse
//     return numsForward
// };

var sortedArrayToBST = function(nums) {
    return gothrough(nums, 0, nums.length - 1);
};

function gothrough(nums, start, end) {
    if (start > end) {  //
        return null; 
    }

    let midpoint = Math.floor((start + end) / 2);
    let root = new TreeNode(nums[midpoint]);
    root.left = gothrough(nums, start, midpoint - 1)
    root.right = gothrough(nums, midpoint + 1, end)

    return root;
}


// let x = nums.length === 0 ? null : ( nums.length === 1 ? true : false)
