/**
 * @param {number} n
 * @return {boolean}
 */
// var isHappy = function(n) {
    
//     if ( n != 1 ) return true
    
//     if ( n > 0 ) {
//         [...n+'']   //["1", "2", "3", "4", "5"]
//         n[i] = Math.pow(i,2)
//     }
// };

var isHappy = function(n) {
    while(true) {
        if(n === 1 || n === 7) return true;
        if(n < 10)  return false;
        
        let sum = 0;
        while (n !== 0) {
            sum = sum + Math.pow(n % 10, 2);
            n = parseInt(n / 10);
        }
        n = sum;
    } 
};