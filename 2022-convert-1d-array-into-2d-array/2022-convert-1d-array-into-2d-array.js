/**
 * @param {number[]} original
 * @param {number} rows
 * @param {number} columns
 * @return {number[][]}
 */
var construct2DArray = function(original, rows, columns) {
    if (rows * columns !== original.length) {
        return [];
    }
    
    let storage = [];
    
    for (let i = 0; i < rows; i++) {
        storage.push(original.splice(0, columns))
    }
    
    return storage

};