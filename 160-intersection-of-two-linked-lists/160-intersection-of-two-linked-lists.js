/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {

//  1) Create an empty hash set. 
// 2) Traverse the first linked list and insert all nodes’ addresses in the hash set. 
// 3) Traverse the second list. For every node check if it is present in the hash set. If we find a node in the hash set, return the node.
    
    let storage = new Set();
    
    while (headA != null) {
        storage.add(headA);           // add it to storage
        headA = headA.next ;          // move to the next number that will be added to storage
    }
    
    while (headB != null) {
        if (storage.has(headB)) {
            return headB;
        }
        headB = headB.next;
    }
    return null;
};

