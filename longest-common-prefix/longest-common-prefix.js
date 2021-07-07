/**
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefix = function(strs) {
    
//     let emptystring = ""

//     for (let i = 0; i <= strs.length; i++) {
//         for (let j = 0; j <= strs.length; j++) {
//             if (strs[i] === strs[j] && strs[i+1] === strs[j+1]) {
//                 return (strs[i] + strs[i+1])
//             } else if (strs[i] !== strs[j] && strs[i+1] !== strs[j+1]) {
//                 return emptystring
//             } else return emptystring;
//         }
//     }
// }; 

var longestCommonPrefix = function(strs) {
    if(strs.length == 0) return '';
    let answer = '';
    for(let i = 0; i < strs[0].length; i++) {
        if (strs.every(function (item) {
                return strs[0][i] === item[i];
            })) {
            answer = answer + strs[0][i];
        } else {
            break;
        }
    }
    return answer;
};