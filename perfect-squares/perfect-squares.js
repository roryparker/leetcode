/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let x = new Array(n + 1).fill(Number.MAX_VALUE);
    x[0] = 0;
    
    for (let i = 1; i <= n; i++)
        for (let j = 1; j * j <= i; j++)
            x[i] = Math.min(x[i], x[i - j * j] + 1);
    
    return x[n];
};