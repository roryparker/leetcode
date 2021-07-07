/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(!l1 && !l2) return null
    
    let head = new ListNode()
    let startOfHead = head
    while(l1 || l2){
        if(!l2 || (l1 && l1.val < l2.val)){
            startOfHead.val = l1.val
            l1 = l1.next
        }else{
            startOfHead.val = l2.val
            l2 = l2.next
        }
        if(!l1 && !l2) return head
        startOfHead.next = new ListNode(null)
        startOfHead = startOfHead.next
    }
    return head
};
