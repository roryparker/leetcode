/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let storage = {};
    
    for( let i = 0; i < nums.length; i++){
        if (storage[nums[i]]) return nums[i];
        storage[nums[i]] = true
    } 
    
    console.log(storage)
};