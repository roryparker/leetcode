/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let answer = [];
    
    for (let i = 0; i < nums.length; i++) {
        nums[i] = Math.pow(Math.abs(nums[i]), 2)
    }
    
    return nums.sort((a, b) => {
        return a - b;
    })
};