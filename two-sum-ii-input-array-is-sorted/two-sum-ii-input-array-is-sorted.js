/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let start = 0, end = (numbers.length - 1), sum = 0
    
    while (start != end) {
        sum = numbers[start] + numbers[end]
    
        if (sum > target) {
            end = end - 1
        } else if ( sum < target) {
            start = start + 1
        } else return [(start + 1), (end + 1)]
    
    }  
};