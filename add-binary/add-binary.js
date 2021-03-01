/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {

    let result = "",
        carryover = 0;

    while (a || b || carryover) {
        let sum = +a.slice(-1) + +b.slice(-1) + carryover; // return the last element in array in numeric form

        if (sum > 1) {
            result = sum % 2 + result;
            carry = 1;
        } else {
            result = sum + result;
            carryover = 0;
        }
        a = a.slice(0, -1)
        b = b.slice(0, -1)
    }

    return result;
};