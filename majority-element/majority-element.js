/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let n = nums.length;

    nums.sort(); //sort numbers in the array
    return nums[Math.floor(n / 2)];
};