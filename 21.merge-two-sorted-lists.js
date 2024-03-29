/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 *
 * https://leetcode.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (51.49%)
 * Likes:    3457
 * Dislikes: 509
 * Total Accepted:    869.4K
 * Total Submissions: 1.7M
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * Merge two sorted linked lists and return it as a new list. The new list
 * should be made by splicing together the nodes of the first two lists.
 *
 * Example:
 *
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function (l1, l2) {
  // // recursion
  // if (!l1 || !l2) return l1 || l2

  // if (l1.val < l2.val) {
  //   l1.next = mergeTwoLists(l1.next, l2)
  //   return l1
  // }

  // l2.next = mergeTwoLists(l1, l2.next)
  // return l2

  if (!l1) return l2
  if (!l2) return l1

  const dummyHead = new ListNode()
  let tail = dummyHead
  while (l1 && l2) {
    if (l1.val < l2.val) {
      tail.next = l1
      l1 = l1.next
    } else {
      tail.next = l2
      l2 = l2.next
    }
    tail = tail.next
  }

  tail.next = l1 || l2

  return dummyHead.next
}
// @lc code=end
