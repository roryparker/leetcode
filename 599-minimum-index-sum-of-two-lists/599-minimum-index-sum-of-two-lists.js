/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let newStoredList = [], map = new Map(), min = Infinity;
    
    for (let i = 0; i < list1.length; i++) {
        map.set(list1[i], i);
    }
    
    for (let i = 0; i < list2.length; i++) {
        const menu = list2[i];
        
        if (map.has(menu)) {
            const priority = map.get(menu) + i;
            if (priority < min) {
                min = priority;
                newStoredList = [menu];
            } else if (priority === min) {
                newStoredList.push(menu);
            }
        }
    }
    
    return newStoredList;
};