/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    var array = new Array();
    array[0] = nums[0];
    for (i = 1; i < nums.length; i++)
        array[i] = nums[i] + array[i - 1];
    return array;
};