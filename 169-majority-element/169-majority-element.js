/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function(nums) {
    let map = {};
    let maj;
    for (let num of nums) {
        if (!map[num]) {
            map[num] = 0
        }
        map[num]++;
        
        if (maj == undefined || map[maj] < map[num]) {
            maj = num;
        }
    }
    
    return maj;
};