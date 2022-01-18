/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let storage = nums.length;
   
    for ( i in nums) {
        storage += (i - nums[i])
    }
    
    console.log(storage)
    return storage;
};