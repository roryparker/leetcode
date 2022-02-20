/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */

var distanceK = function(root, target, K) {
    const adjacencyList = {};

    function createGraph(node, parent) {
        if(!node) return;
        const neighbor = [];
        
        if(node.left) {
            neighbor.push(node.left.val);
            createGraph(node.left, node.val);
        }
        if(node.right) {
            neighbor.push(node.right.val);
            createGraph(node.right, node.val);
        }
        if(parent !== null) neighbor.push(parent);
        adjacencyList[node.val] = neighbor;
    }
    
    createGraph(root, null);
    
    const queue = [[target.val, 0]];
    const visited = new Set();
    const result = [];
    
    while(queue.length) {
        const [node, gen] = queue.shift();
        if(visited.has(node)) continue;
        if(gen === K) result.push(node);
        if(gen > K) return result;
        
        for(let n of adjacencyList[node]) {
            queue.push([n, gen+1]);
        }
        visited.add(node);
    }
    return result;
};