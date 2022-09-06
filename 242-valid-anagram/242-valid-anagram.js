/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let slen=0, tlen=0;
   if(s.length != t.length){
       return false;
   } 
    else{
        let a=[...s].sort(), b=[...t].sort();
       for(i=0;i<a.length;i++){ 
	   if(a[i]!==b[i]){
            return false
        }}
       
        return true
    }
};