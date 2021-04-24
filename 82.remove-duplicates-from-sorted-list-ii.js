/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/
 *
 * algorithms
 * Medium (39.27%)
 * Likes:    2854
 * Dislikes: 125
 * Total Accepted:    327K
 * Total Submissions: 825.7K
 * Testcase Example:  '[1,2,3,3,4,4,5]'
 *
 * Given the head of a sorted linked list, delete all nodes that have duplicate
 * numbers, leaving only distinct numbers from the original list. Return the
 * linked list sorted as well.
 *
 *
 * Example 1:
 *
 *
 * Input: head = [1,2,3,3,4,4,5]
 * Output: [1,2,5]
 *
 *
 * Example 2:
 *
 *
 * Input: head = [1,1,1,2,3]
 * Output: [2,3]
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the list is in the range [0, 300].
 * -100 <= Node.val <= 100
 * The list is guaranteed to be sorted in ascending order.
 *
 *
 */

// @lc code=start
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
const deleteDuplicates = function (head) {
  const dummyHead = new ListNode(null, head)

  let pre = dummyHead
  let cur = dummyHead.next
  while (cur) {
    if (cur.next && (cur.next.val === cur.val)) {
      while (cur.next && (cur.next.val === cur.val)) {
        cur = cur.next
      }
      pre.next = cur.next
    } else {
      pre = cur
    }

    cur = cur.next
  }

  return dummyHead.next
}
// @lc code=end
