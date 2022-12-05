/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    // sort the array from low to high
    
    nums.sort((a, b) => a - b);
    
    // Get the product of the two highest and lowest values.
    // Then subtract from the two lowest values.
    
    const diff = nums.at(-1) * nums.at(-2) - nums.at(0) * nums.at(1);
    
    console.log(diff);
    return diff;

};