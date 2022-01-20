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
    
//     var findDuplicate = function(nums) {
//     let has = {}
//     for (let i = 0; i < nums.length; i++){
//         if (has[nums[i]]) return nums[i]
//         has[nums[i]] = true
//     }
// };
};