/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let dic = []
    for(i in nums) {
        if (target-nums[i] in dic) {
            return [dic[target-nums[i]], i]
        }
        dic[nums[i]] = i
}
};
    
    
