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
var deleteDuplicates = function (head) {
  let temp = head?.next;
  let pointer = head;
  while (temp) {
    if (pointer.val === temp.val) {
      pointer.next = temp.next;
      temp = temp?.next;
    } else {
      pointer = temp;
      temp = temp.next;
    }
  }
  return head;
};
