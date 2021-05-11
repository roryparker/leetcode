/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let result = 0, maxlength = 0;
    
    for ( i = 0; i < s.length; i++) {
        for ( j = result; j < i; j++){
            if ( s[i] === s[j]) {
                result = j + 1;
                break;
            }
        }
        
        if ( i - result + 1 > maxlength) {
            maxlength = i - result + 1;
        } 
    }
    
    return maxlength;
};