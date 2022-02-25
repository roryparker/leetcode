/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = (nums, target) => {
    if (nums.map(x => x !== target).includes(false)) {
      target
    } else { 
      -1
    }
    return nums.indexOf(target)
};