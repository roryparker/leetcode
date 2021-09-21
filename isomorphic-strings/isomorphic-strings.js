/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (new Set(s).size !== new Set(t).size) return false //error checking using set and .size() to create a new object and return the unique elements in the Set object.
    
    const mapToS = new Map() // creates a new array populated with the results of calling  a provided function on every element in the calling array.
    const mapToT = new Map()
    
    for (let i = 0; i < s.length; i++) {
        
        const tCharacter = t.charAt(i) // method that returns the character from the specified index.
        const sCharacter = s.charAt(i)
        
        if (mapToS.get(sCharacter) !== mapToT.get(tCharacter)) return false // returns a specified element "i" from the Map object.
        
        mapToS.set(sCharacter, i + 1) //  adds or updates an element with a specified key and a value to a Map object.
        mapToT.set(tCharacter, i + 1)
        
    }
    return true
};