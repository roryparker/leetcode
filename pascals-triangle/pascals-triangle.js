/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 0) return [];    // return empty array
    if (numRows === 1) return [[1]]; // return a two-dimensional array with one row and one column, [[1]] - Error correction
    
    let answers = [];
    for (let row = 1; row <= numRows; row++) {
        let cache = [];
        for (let column = 0; column < row; column++) {
            if (column === 0 || column === row - 1) {
                cache.push(1);
            } else {
                cache.push((answers[row - 2][column - 1] + answers[row - 2][column]))
            }
        }
        
        answers.push(cache)
    }
    return answers;
};

// var generate = function(numRows) {
//     if (numRows === 0) return [];
//     if (numRows === 1) return [[1]];
//     let result = [];
//     for (let row = 1; row <= numRows; row++) {
//         let arr = [];
//         for (let col = 0; col < row; col++) {
//             if (col === 0 || col === row - 1) {
//                 arr.push(1);
//             } else {
//                 arr.push((result[row-2][col-1] + result[row-2][col]));
//             }
//         }
//         result.push(arr);
//     }
//     return result;
// }