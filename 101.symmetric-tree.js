/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
 *
 * https://leetcode.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (48.14%)
 * Likes:    6287
 * Dislikes: 167
 * Total Accepted:    901.9K
 * Total Submissions: 1.8M
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * Given the root of a binary tree, check whether it is a mirror of itself
 * (i.e., symmetric around its center).
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,2,2,3,4,4,3]
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1,2,2,null,3,null,3]
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [1, 1000].
 * -100 <= Node.val <= 100
 *
 *
 *
 * Follow up: Could you solve it both recursively and iteratively?
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = function (root) {
  if (!root) return true

  const _reverseTree = node => {
    if (!node) return null

    const { left, right } = node
    node.left = _reverseTree(right)
    node.right = _reverseTree(left)
    return node
  }

  const _serializeTree = node => {
    if (!node) return '#'

    const { left, right, val } = node
    return `${val}${_serializeTree(left)}${_serializeTree(right)}`
  }

  const { left, right } = root
  return _serializeTree(_reverseTree(left)) === _serializeTree(right)
}
// @lc code=end
