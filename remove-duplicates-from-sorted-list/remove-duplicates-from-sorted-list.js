/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let top = head;
    
    while (!!top && !!top.next) {
        if (top.val === top.next.val) {
            top.next = top.next.next;
        } else {
            top = top.next;
        };
    };
    return head;
};