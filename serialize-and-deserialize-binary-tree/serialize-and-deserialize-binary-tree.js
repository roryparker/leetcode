/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let result = []; // result equals an empty array
    serializeMaker (root, result); // function takes in two variables.
    return result.join(","); // returns results
};

var serializeMaker = function(root, output) { // function takes in root and output args.
    if (root === null) {
        output.push("#");
        return;                  // push/show a number symbol if the root is null
    }
    output.push(root.val)
    serializeMaker(root.left, output);
    serializeMaker(root.right, output)
}
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    data = data.split(",");  // split the array using commas.
    let index = 0;
    
    function deserialMaker(data) { // create a function that takes in data as argument
        if (index > data.length || data[index] === "#") {
            return null;
        }
        let root = new TreeNode(parseInt(data[index]));
        index++;
        root.left = deserialMaker(data);
        index++;
        root.right = deserialMaker(data);
        return root;
    }
    return deserialMaker(data);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */