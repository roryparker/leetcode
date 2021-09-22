/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    const alphabetString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const arr = columnTitle.split('');
    let result = 0;
    
    for (let i = 0; i < arr.length; i++) {
        result = result * 26 + alphabetString.indexOf([arr[i]]) + 1;
    };
    
    return result;
};