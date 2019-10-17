/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 *
 * https://leetcode.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (57.34%)
 * Likes:    2912
 * Dislikes: 73
 * Total Accepted:    709.5K
 * Total Submissions: 1.2M
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * Reverse a singly linked list.
 *
 * Example:
 *
 *
 * Input: 1->2->3->4->5->NULL
 * Output: 5->4->3->2->1->NULL
 *
 *
 * Follow up:
 *
 * A linked list can be reversed either iteratively or recursively. Could you
 * implement both?
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
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) {
    return null
  }

  const inputNodes = []

  let curNode = head
  while (curNode) {
    inputNodes.push(curNode)
    curNode = curNode.next
  }

  inputNodes.forEach(
    (node, idx, arr) => (node.next = idx === 0 ? null : arr[idx - 1])
  )

  return inputNodes[inputNodes.length - 1]
}
// @lc code=end
