/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let answer = [];
    
    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] * nums[i]
        nums[i] = Math.abs(nums[i])
        
    }
    
    return nums.sort((a, b) => {
        return a - b;
    })
};