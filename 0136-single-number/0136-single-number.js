/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums, xor = 0) {    
    for (num of nums) {
        xor = xor ^ num;
    }
    return xor;
};