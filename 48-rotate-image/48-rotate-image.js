/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    
    let n = matrix.length;
    
    for (let i = 0; i < parseInt( n / 2 ); i++) {                   //loop over the array, i = 1
        for (let j = i; j < n - i - 1; j++) {                       // 1 < 3 - 1 - 1
            
            let tempSpace = matrix[i][j]
            
            matrix[i][j] = matrix[n - 1 - j][i];
            matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];
            matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];
            matrix[j][n - 1 - i] = tempSpace;
            
            console.log(matrix)
        }
    }
};