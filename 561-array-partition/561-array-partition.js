/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    // Sort the array
    sortedNumsMin = nums.sort((a, b) => (a - b))
    
    // Create a solution variable. 
    let solution = 0;
    
    for (let i = 0; i < nums.length; i = i + 2) {
        solution = solution + nums[i]
    }
    
    return solution;
};