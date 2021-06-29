/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let myAnswer = x
    if (myAnswer < 0) { return false; } // return false if the integer is less than zero
    if (myAnswer == myAnswer.toString().split('').reverse().join('')) { return true; }
    else return false;
};