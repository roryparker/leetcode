/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let min = prices[0], ten = 10, zero = 0, res = 0;
        
    prices.forEach((element) => {
        if (ten > element) {
            ten = element;
        }
    });

    console.log(`The smallest number in the array: ${ten}`);  
    
    prices.forEach((element) => {
        if (zero < element) {
            zero = element;
        }
    });

    console.log(`The largest number in the array: ${zero}`);  
    
    prices.forEach(cur => {
        res = Math.max(cur - min, res);
        min = Math.min(min, cur);
    });
    
    return res;
 
};
