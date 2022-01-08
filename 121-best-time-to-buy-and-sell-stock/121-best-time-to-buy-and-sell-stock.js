/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = Number.MAX_VALUE              // buy equals infinity
    let sell = 0                            
    
    for (const price of prices) {                          // If any price in the array is less than infinity 
        if (price < buy) {                                 // then the buy price equals the price
            buy = price
        } else {
            sell = Math.max(sell, price - buy)             // or I sell at 0 or the price minus infinity.
        }
    }
    return sell
};