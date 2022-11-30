/**
 * @param {string} s
 * @return {string}
 */
// create the function
var sortSentence = function(s) {
    
    //split the sentence into an array
    const sentenceArray = s.split(" ")
    
    // create a new array
    let solution = new Array()
    
    // For each word in the sentence -- 
    sentenceArray.forEach((word, index) => {
        
        // Pull out the integer and assign it to variable sentenceNumber.
        const sentenceNumber = parseInt(word.charAt(word.length-1))
        
        // Create an index value (0, 1, 2, 3) so it's already sorted in the new array.
        solution[sentenceNumber - 1] = word.substring(0, word.length-1)
    })
    
    // Return the organized values
    return solution.join(" ")
};