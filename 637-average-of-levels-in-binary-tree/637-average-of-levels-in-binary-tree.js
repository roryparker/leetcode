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
var averageOfLevels = function(root) {
    // created answer storage, level of the tree, and started
    let storage = [], currentTreeLevel = [root], letsContinue = true;
    
    // setup answer for average and floating point number
    while (letsContinue) {
        let child = [], sum = 0.0;
        
        // add up sum of current level and add children to 'next level' variable and traverse the array
        for (let i = 0; i < currentTreeLevel.length; i++) {
            let parent = currentTreeLevel[i];
            sum = sum + parent.val;
            if (parent.left) child.push(parent.left);
            if (parent.right) child.push(parent.right);
        }
        
        let average = sum / currentTreeLevel.length; //Calculate the average
        storage.push(average); //push average to storage
        currentTreeLevel = child; // Switch to next level
        letsContinue = currentTreeLevel.length > 0;
    }
    
    console.log(storage)
    return storage;
};