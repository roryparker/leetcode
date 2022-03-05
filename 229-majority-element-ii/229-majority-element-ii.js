/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var majorityElement = function(nums) {
//     let n = nums.length;
//     let test = Math.floor(nums.length / 3) + 1;

//     nums.sort(); //sort numbers in the array
//     return nums[test];
// };

var majorityElement = function(nums) {
    let threshold = Math.floor(nums.length / 3) + 1;
    let map = {};
    let result = [];
    nums.forEach(n => {
        n in map ? map[n]++ : map[n] = 1;
        map[n] === threshold && result.push(n);
    });
    return result;
};