/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let storage = nums.length;
   
    for (const i in nums) {
        storage = storage + (i - nums[i])
    }
    
    console.log(storage)
    return storage;
};