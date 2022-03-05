/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var backspaceCompare = function(s, t) {
    let answer = [];
    
    for(let row = 0; row < s.length; row++){
        if (s[row] == '#') {
            answer.pop() 
        }else {
        answer.push(s[row])
        }
    }
    
    let joiner = answer.join(''); answer = [];
        
    for(let row = 0; row < t.length; row++){
        if (t[row] == '#') {
            answer.pop() 
        }else {
            answer.push(t[row])
        }
        
    }
        
    return joiner === answer.join('');
};
        
// var backspaceCompare = function(s, t) {
//     let stack = [];
//     for(let i=0; i<s.length; i++){
//         s[i] == '#' ?  stack.pop(): stack.push(s[i]);
//     }
//     let a = stack.join(''); stack = [];
//     for(let i=0; i<t.length; i++){
//         t[i] == '#' ?  stack.pop(): stack.push(t[i]);
//     }
//     return a === stack.join('');
// };