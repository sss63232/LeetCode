/*
 * @lc app=leetcode id=114 lang=javascript
 *
 * [114] Flatten Binary Tree to Linked List
 *
 * https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description/
 *
 * algorithms
 * Medium (51.97%)
 * Likes:    3996
 * Dislikes: 393
 * Total Accepted:    424.6K
 * Total Submissions: 813.6K
 * Testcase Example:  '[1,2,5,3,4,null,6]'
 *
 * Given the root of a binary tree, flatten the tree into a "linked
 * list":
 *
 *
 * The "linked list" should use the same TreeNode class where the right child
 * pointer points to the next node in the list and the left child pointer is
 * always null.
 * The "linked list" should be in the same order as a pre-order traversal of
 * the binary tree.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,2,5,3,4,null,6]
 * Output: [1,null,2,null,3,null,4,null,5,null,6]
 *
 *
 * Example 2:
 *
 *
 * Input: root = []
 * Output: []
 *
 *
 * Example 3:
 *
 *
 * Input: root = [0]
 * Output: [0]
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [0, 2000].
 * -100 <= Node.val <= 100
 *
 *
 *
 * Follow up: Can you flatten the tree in-place (with O(1) extra space)?
 */

// @lc code=start
/**
 * 二叉樹
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = function (root) {
  // if (!root) return null

  // const { left, right } = root
  // const flatLeft = flatten(left)
  // const flatRight = flatten(right)

  // if (!flatLeft) {
  //   root.right = flatRight
  //   return root
  // }

  // root.left = null
  // root.right = flatLeft
  // let mostRight = root.right
  // while (mostRight.right) mostRight = mostRight.right
  // mostRight.right = flatRight

  // return root

  if (!root) return null
  const { left, right } = root
  const flatLeftLast = flatten(left)
  const flatRightLast = flatten(right)

  if (root.left) {
    root.right = root.left
    root.left = null
    flatLeftLast.right = right
  }

  if (flatRightLast) return flatRightLast
  if (flatLeftLast) return flatLeftLast
  return root
}
// @lc code=end
