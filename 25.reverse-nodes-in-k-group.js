/*
 * @lc app=leetcode id=25 lang=javascript
 *
 * [25] Reverse Nodes in k-Group
 *
 * https://leetcode.com/problems/reverse-nodes-in-k-group/description/
 *
 * algorithms
 * Hard (39.75%)
 * Likes:    1759
 * Dislikes: 338
 * Total Accepted:    238.6K
 * Total Submissions: 599.5K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * Given a linked list, reverse the nodes of a linked list k at a time and
 * return its modified list.
 *
 * k is a positive integer and is less than or equal to the length of the
 * linked list. If the number of nodes is not a multiple of k then left-out
 * nodes in the end should remain as it is.
 *
 *
 *
 *
 * Example:
 *
 * Given this linked list: 1->2->3->4->5
 *
 * For k = 2, you should return: 2->1->4->3->5
 *
 * For k = 3, you should return: 3->2->1->4->5
 *
 * Note:
 *
 *
 * Only constant extra memory is allowed.
 * You may not alter the values in the list's nodes, only nodes itself may be
 * changed.
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  /**
   * method 1
   */
  // const _hasEnoughNodes = (head, k) => {
  //   let cur = head
  //   for (let i = 0; i < k; i++) {
  //     if (cur === null) { return false }
  //     cur = cur.next
  //   }
  //   return true
  // }
  // if (_hasEnoughNodes(head, k)) {
  //   let cur = head
  //   let pre = null
  //   for (let i = 0; i < k; i++) {
  //     const next = cur.next
  //     cur.next = pre
  //     pre = cur
  //     cur = next
  //   }
  //   head.next = reverseKGroup(cur, k)
  //   return pre
  // }
  // return head

  /**
   * method 2
   */
  const _getGroupEndNode = (head, k) => {
    let cur = head
    let pre = null
    for (let i = 0; i < k; i++) {
      if (cur === null) {
        return null
      }
      pre = cur
      cur = cur.next
    }
    return pre
  }

  const _reverseAdjacent = (pre, cur) => {
    if (cur === null) {
      return pre
    }
    const next = cur.next
    cur.next = pre
    return _reverseAdjacent(cur, next)
  }

  const endNode = _getGroupEndNode(head, k)

  if (endNode) {
    const nextHead = endNode.next
    endNode.next = null
    _reverseAdjacent(null, head)
    head.next = reverseKGroup(nextHead, k)
    return endNode
  }
  return head
}
// @lc code=end
