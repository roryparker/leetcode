/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let charToBeRemoved = /[^a-z0-9]/gi;
    s = s.toUpperCase().replace(charToBeRemoved, '')
    
    for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
        if (s.charAt(i) !== s.charAt(j)) {
            return false
        }
    }
    return true;
};

// function isPalindrome(sometext) {
//   var replace = /[^a-z0-9]/gi; //regex for what chars to ignore when determining if palindrome
//   var text = sometext.replace(replace, '').toUpperCase(); //remove toUpperCase() for case-sensitive
//   for (var i = 0; i < Math.floor(text.length/2) - 1; i++) {
//     if(text.charAt(i) == text.charAt(text.length - 1 - i)) {
//       continue;
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

