/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    
    // Create Storage
    let storage = [];
    
    // Create a map
    const map = new Map();
    
    // Create Key:Value pair array based on height
    heights.forEach((element, i) => map.set(element, names[i]));
    
    // Sort the statistics 
    heights.sort((a, b) => b - a);

    // Add to storage
     heights.forEach((element) => storage.push(map.get(element)));
    
    
    console.log(storage);
    return storage;
    
};