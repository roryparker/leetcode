/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let newStoredList = [], map = new Map(), min = Infinity;
    
    list1.forEach((element, i) => (map.set(list1[i], i)));
//     for (let i = 0; i < list1.length; i++) {
//         map.set(list1[i], i);
//     }
    
    for (let i = 0; i < list2.length; i++) {
        const menu = list2[i];
        
        if (map.has(menu)) {
            const checkIfInMap = map.get(menu) + i;
            if (checkIfInMap < min) {
                min = checkIfInMap;
                newStoredList = [menu];
            } else if (checkIfInMap === min) {
                newStoredList.push(menu);
            }
        }
    }
    
    return newStoredList;
};