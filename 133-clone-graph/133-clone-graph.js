/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
   
    let clonemap = new Map();
    
    const dfsSetup = node => {
        if (!node) return null;
        let newNode = new Node(node.val);
        if (clonemap.has(node)) 
            newNode = node;
            clonemap.set(node, newNode)
        
        for(var x of node.neighbors) {
            newNode.neighbors.push(clonemap.get(x) || dfsSetup(x))
        }
        
        return newNode;
    }
    
    return dfsSetup(node);
};