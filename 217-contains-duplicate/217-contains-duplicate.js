/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let inStorage = {};
    
    for(let i=0 ; i < nums.length ; i++){
        if(inStorage[nums[i]]) {
            return true;
        }else{
            inStorage[nums[i]] = true
        }
    }
    
    return false
    
};