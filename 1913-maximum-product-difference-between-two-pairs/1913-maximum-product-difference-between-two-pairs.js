/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    // sort the array from low to high
    
    nums.sort((a, b) => a - b);
    
    // Get the product of the two highest and lowest values.
    // Then subtract from the two lowest values.
    
    const high = nums.at(-1) * nums.at(-2);
    const low = nums.at(0) * nums.at(1);
    
    let diff = high - low;
    
    console.log(diff);
    return diff;

};