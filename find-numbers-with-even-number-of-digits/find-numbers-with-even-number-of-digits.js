/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let answer = 0;
    
    for (let i = 0; i < nums.length; i++) {
        let num = new String(nums[i]);
        
        if (num.length % 2 === 0) answer++;
    }
    
    return answer;
    
};