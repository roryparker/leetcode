/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let storage = [];
    
    lists.forEach(integer => {
        while(integer && integer.val !== null) {
            storage.push(integer.val);
            integer = integer.next;
    }
});
  
    storage = storage.sort((a, b) => b - a);
    
    let resultNode = null;
    
    storage.forEach(item => {
        let tempNode = new ListNode(item);
        tempNode.next = resultNode;
        resultNode = tempNode;
  })
  return resultNode;
};