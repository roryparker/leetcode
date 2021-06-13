/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  nums.sort((a, b) => a - b); // sort through all and return values using the compare function.
  console.log(nums); // log the answers
  let len = nums.length - 1; // use minus 1 to stop fencepost error
  return (nums[len] - 1) * (nums[len - 1] - 1);
};