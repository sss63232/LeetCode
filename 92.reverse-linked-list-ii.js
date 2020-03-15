/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
 *
 * https://leetcode.com/problems/reverse-linked-list-ii/description/
 *
 * algorithms
 * Medium (37.36%)
 * Likes:    1861
 * Dislikes: 121
 * Total Accepted:    244.6K
 * Total Submissions: 654.6K
 * Testcase Example:  '[1,2,3,4,5]\n2\n4'
 *
 * Reverse a linked list from position m to n. Do it in one-pass.
 *
 * Note: 1 ≤ m ≤ n ≤ length of list.
 *
 * Example:
 *
 *
 * Input: 1->2->3->4->5->NULL, m = 2, n = 4
 * Output: 1->4->3->2->5->NULL
 *
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  const _reverseConsecutiveNodes = (pre, cur) => {
    if (!cur) { return pre }
    const initialCurNext = cur.next
    cur.next = pre
    return _reverseConsecutiveNodes(cur, initialCurNext)
  }

  const dummyHead = new ListNode()
  dummyHead.next = head

  let cur = dummyHead
  for (let i = 0; i < m - 1; i++) {
    cur = cur.next
  }
  const front = cur
  const start = cur.next

  for (let i = 0; i <= n - m; i++) {
    cur = cur.next
  }
  const end = cur
  const tail = cur.next

  end.next = null
  front.next = _reverseConsecutiveNodes(null, start)
  start.next = tail

  return dummyHead.next
}
// @lc code=end
