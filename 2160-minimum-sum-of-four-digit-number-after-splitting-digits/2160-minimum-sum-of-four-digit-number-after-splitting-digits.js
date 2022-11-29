/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(nums) {
    //Convert array to string so it can be split
    let numToString = nums.toString()
    
    //Create Storage
    let storage = [];
    
    //Loop over the array and place the elements into the storage array
    for( i = 0; i < numToString.length; i++){
        storage[i] = numToString.charAt(i);
    }
    
    //Sort the contents of the array.
    storage.sort();

    // Add the contents of the array
    const storageBlockOne = Number(storage[0] + storage[2]);
    const storageBlockTwo = Number(storage[1] + storage[3]);

    sum = storageBlockOne + storageBlockTwo;

    return sum;
};

