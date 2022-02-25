/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    nums.forEach((element) => {
        if (element == target) {
            console.log(nums.indexOf(element))
            return nums.indexOf(element);
        }else return -1
    })
};

var search = (nums, target) => {
    if (nums.map(x => x !== target).includes(false)) {
      target
    } else { 
      -1
    }
    return nums.indexOf(target)
};