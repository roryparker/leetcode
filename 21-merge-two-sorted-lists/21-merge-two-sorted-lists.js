/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummyNode = new ListNode(0), tail = dummyNode;
    
    while (true) {
        if (list1 == null) {
            tail.next = list2;
            break;
        }
        
         if (list2 == null) {
            tail.next = list1;
            break;
        }
        
        if (list1.val <= list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        
        tail = tail.next;
    }
    
    return dummyNode.next;
}; 