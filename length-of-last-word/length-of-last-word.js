/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLastWord = function(s) {

//     let length = 0
    
//     for (let i = 0; i <= s.length; i++) {
//         if (s.charAt(i) == " " ) {
//             break;
//         } 
//         else { 
//             length++; 
//     }
//     return length;
//    }
// };

var lengthOfLastWord = function(s) {    
    return s.trimEnd().split(" ").pop().length  // - trims the array spaces, splits the string on the space, removes the word "World", and then counts the length.
};