/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    i = digits.length - 1
    
    while (digits[i] === 9) {                    
            digits[i] = 0;
            i = i - 1
    }
    
    if (i < 0) { return [1, ...digits] }
    
    digits[i] += 1
    return digits                 // return 1 in front of the digits
};