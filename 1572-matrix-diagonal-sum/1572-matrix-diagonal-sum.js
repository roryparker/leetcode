/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let length = mat.length, sum = 0;
    
    for (let i = 0; i < length; i++) {
        sum += mat[i][i];
        if (length - i - 1 != i) {
             sum += mat[length - i - 1][i];
        }
    }
    
    return sum 
};