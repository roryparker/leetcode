/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) { 
var len = nums.length;
for (var i = 0; i < len; i++) {
    for (var j = i + 1; j < len; j++) {
        if (nums[j] === target - nums[i]) {
            return [i,j];
        }
    }
  }
};

