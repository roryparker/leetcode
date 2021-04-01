/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    
    let result = "", carry = 0;
    
    while (a || b || carry) {
        let sum = +a.slice(-1) + +b.slice(-1) + carry; // return the last element in array in numeric form
        
        if ( sum > 1) {
            result = sum % 2 + result;
            carry = 1;
        }else {
            result = sum + result;
            carry = 0;
        }
        a = a.slice(0, -1)
        b = b.slice(0, -1)
    }

    return result;
};

// x.split(" ").map(function(element) {
//         return x.fromCharCode(parseInt(element, 2));
//     }).join("")