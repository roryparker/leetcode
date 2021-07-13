/**
 * @param {number[]} nums
 * @return {number}
 */
let maxSubArray = function(nums) {
    let sum = nums[0];               // sum equals the first index of nums
        
    for (let i = 1; i < nums.length; i++) {     //create a for loop to go over each element in the array
        if (nums[i - 1] > 0) {                  //if the nums index - 1 is greater than 0
            nums[i] += nums[i - 1];             //then the nums index equals the index plus the index - 1
        }
        sum = Math.max(nums[i], sum);           //sum equals the largest non zero number betwen the index of nums or the sum.
    }
    return sum;
};