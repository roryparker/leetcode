/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
// var nextGreatestLetter = function(letters, target) {
//     let arrLength = letters.length
    
//     // if the last element is less than target or target is less than the first element
    
//     if (letters[arrLength - 1] <= target || target < letters[0]) {            
//         return letters[0]
//     }
    
//     // Binary Search
    
//     let Left = 0, Right = arrLength - 1, Middle = Left + (Right - Left) / 2;;
    
//     while (Left + 1 < Right) {
//         if (letters[Middle] <= target) {
//             Left = Middle;
//         }else {
//             Right = Middle;
//         }
//     }
    
//     return letters[Right];
// };

var nextGreatestLetter = function(letters, target) {
    
    for(let i = 0; i < letters.length; i++) {
        if (target < letters[i]) {
            return letters[i]
        }
        
        if(i === letters.length - 1) {{
            return letters[0];
        }}
    }
};