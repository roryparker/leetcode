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
    var res = [];
    if(!root) return res;
    var queue = [root];
    
    while(queue.length) {
        var size = queue.length;
        var sum = 0;
        for(let i = 0; i < size; i++) {
            var head = queue.shift();
            sum += head.val;
            if(head.left) queue.push(head.left);
            if(head.right) queue.push(head.right);
        }
        res.push(sum/size);
        
    }
    return res;

    
};