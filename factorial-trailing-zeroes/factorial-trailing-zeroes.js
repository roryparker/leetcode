/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let count = 1, sum = 0;
  while (5 ** count <= n) {
    sum = sum + Math.floor(n / (5 ** count));
    count = count + 1;
  }
  
  return sum;
};
