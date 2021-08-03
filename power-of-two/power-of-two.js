/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    
    let x = 1
    
    while (x < n)  {
       x = x * 2;
    }
    
    return x === n;
};