/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x < (-1 * (2 ** 31)) || (x > (2 ** 31 - 1))) return 0;
    let answer = parseFloat(x.toString().split('').reverse().join('')) * Math.sign(x);
    if (answer < (-1 * (2 ** 31)) || (answer > (2 ** 31 - 1))) return 0;
    return answer;
};

// var reverse = function(x) {
//     if (x < (-1 * (2 ** 31)) || (x > (2 ** 31 - 1))) return 0;
//     let result = (x < 0 ? -1 : 1) * Number(String(Math.abs(x)).split('').reverse().join('')); 
//     if (result < (-1 * (2 ** 31)) || (result > (2 ** 31 - 1))) return 0;
//     return result;
// };