/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let answer = new Array(); // create an empty array
  let characters = { '(' : ')', '{' : '}', '[' : ']' };     // create an object using a colon as the delimter/seperator for each character
  
    
    // create a for loop which goes over the string
  // if the index of the string is LP or LCB or LB, then push it to the new empty array
  // otherwise if the last element of the characters object does not equal the string index in the original if statement, return false.                    
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      answer.push(s[i]);    
    } else if (characters[answer.pop()] !== s[i]) {
      return false;
    }
  }
  return answer.length ? 0 : 1;        // return the length of the array if 0
};

// var isValid = function(s) {
//   let answer = new Array(); // create an empty array
//   let characters = { '(' : ')', '{' : '}', '[' : ']' };     // create an object using a colon as the delimter/seperator for each character
//   let i = 0;
  
//   characters ? (s[i] === '('|| s[i] === '{' || s[i] === '[') : "null";
//     answer.push(s[i]);
//   characters ? (characters[answer.pop()] !== s[i]) : "null";
//     return true;
    
//     return answer.length ? 0 : 1;
// };

//     var isValid = function(s) {
//     let bracket = {
//         '(':')',
//         '[':']',
//         '{':'}'
//     }
//     let heap = []
    
//     bracket ? heap.push(bracket) : (heap.pop() !== char );
    
//     return (!heap.length) 
// };


