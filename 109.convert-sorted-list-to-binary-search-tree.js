/*
 * @lc app=leetcode id=109 lang=javascript
 *
 * [109] Convert Sorted List to Binary Search Tree
 *
 * https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/description/
 *
 * algorithms
 * Medium (52.44%)
 * Likes:    3601
 * Dislikes: 103
 * Total Accepted:    325.7K
 * Total Submissions: 614K
 * Testcase Example:  '[-10,-3,0,5,9]'
 *
 * Given the head of a singly linked list where elements are sorted in
 * ascending order, convert it to a height balanced BST.
 *
 * For this problem, a height-balanced binary tree is defined as a binary tree
 * in which the depth of the two subtrees of every node never differ by more
 * than 1.
 *
 *
 * Example 1:
 *
 *
 * Input: head = [-10,-3,0,5,9]
 * Output: [0,-3,9,-10,null,5]
 * Explanation: One possible answer is [0,-3,9,-10,null,5], which represents
 * the shown height balanced BST.
 *
 *
 * Example 2:
 *
 *
 * Input: head = []
 * Output: []
 *
 *
 * Example 3:
 *
 *
 * Input: head = [0]
 * Output: [0]
 *
 *
 * Example 4:
 *
 *
 * Input: head = [1,3]
 * Output: [3,1]
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in head is in the range [0, 2 * 10^4].
 * -10^5 <= Node.val <= 10^5
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
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
const sortedListToBST = function (head) {
  const _buildTreeFromSorted = sorted => {
    if (!sorted.length) return null

    const mid = Math.floor(sorted.length / 2)
    return new TreeNode(
      sorted[mid],
      _buildTreeFromSorted(sorted.slice(0, mid)),
      _buildTreeFromSorted(sorted.slice(mid + 1))
    )
  }

  if (!head) return null
  const sortedVals = []
  let cur = head
  while (cur) {
    sortedVals.push(cur.val)
    cur = cur.next
  }

  return _buildTreeFromSorted(sortedVals)
}
// @lc code=end
