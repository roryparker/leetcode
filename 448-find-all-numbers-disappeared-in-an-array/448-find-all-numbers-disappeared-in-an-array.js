/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let missingNumbers = [];
    let storage = {};
    
    for (number of nums) {
        if (!storage[number]) {
           storage[number] = true; 
        }
    }
        
    for (let i = 1; i <= nums.length; i++) {
        if (!storage[i]) {
            missingNumbers.push(i); 
        }
    }
    console.log(missingNumbers)
    return missingNumbers
};