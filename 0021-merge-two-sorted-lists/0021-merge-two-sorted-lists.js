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
    if (!list1 || !list2) return list1 ? list1 : list2;

    let c = list1.val <= list2.val ? list1 : list2;
    const answer = c;
    let t1 = c === list1 ? c.next : list1;
    let t2 = c === list2 ? c.next : list2;

    while(t1 && t2) {
        if (t1.val <= t2.val) {
            c.next = t1;
            c = t1;
            t1 = c.next;
        } else {
            c.next = t2;
            c = t2;
            t2 = c.next;
        }
    }

    if (t1 && !t2) c.next = t1;
    else if (!t1 && t2) c.next = t2;

    return answer;
};