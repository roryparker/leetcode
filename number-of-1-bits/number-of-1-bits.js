/**
 * @param {number} n - a positive integer
 * @return {number}
 */
// var hammingWeight = function(n) {
//     let answer = 0
    
//     while (n) {
//         if (n !== 0 || n & 1) { 
//             answer = answer + 1
//         }
//         n = n >> 1 
//     }
        
//     return answer;
// };

var hammingWeight = function(n) {
    let count = 0;
    while (n !== 0) {
        count += n & 1;
        n >>>= 1; 
    }
    return count;
};