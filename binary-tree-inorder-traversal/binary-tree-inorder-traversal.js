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


// var inorderTraversal = function(root) {
//     var stack = [],
//         res = [];
    
//     while(true){
//         if(root !== null){
//             stack.push(root);
//             root = root.left;
//         }else{
//             if(stack.length === 0) break;
//             root = stack.pop();
//             res.push(root.val);
//             root = root.right;
//         }
//     }
    
//     return res;
// };

var inorderTraversal = function(root) { // anon function
    const stack = [], result = []; //create empty objects
    
    while (true) {
        if (root !== null) {  // if root 
            stack.push(root); // place item at end of array
            root = root.left; // root is now on the left.
        }else {
            if (stack.length === 0) break; // if it's equal value and equal type, stop.
            root = stack.pop(); // removes the last element from the array and returns that element.
            result.push(root.val); // place item at the end of the result array.
            root = root.right; // root is now on the right
        }
    }
    return result;
} 