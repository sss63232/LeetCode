/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
 *
 * https://leetcode.com/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (56.64%)
 * Likes:    4281
 * Dislikes: 102
 * Total Accepted:    782.5K
 * Total Submissions: 1.4M
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given the root of a binary tree, return the level order traversal of its
 * nodes' values. (i.e., from left to right, level by level).
 *
 *
 * Example 1:
 *
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[3],[9,20],[15,7]]
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1]
 * Output: [[1]]
 *
 *
 * Example 3:
 *
 *
 * Input: root = []
 * Output: []
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [0, 2000].
 * -1000 <= Node.val <= 1000
 *
 *
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
 * @return {number[][]}
 */
const levelOrder = function (root) {
  if (!root) {
    return []
  }

  const _toLevel = level => node => ({ ...node, level })

  const result = []

  const queue = [_toLevel(0)(root)]
  while (queue.length > 0) {
    const node = queue.shift()
    if (Object.hasOwnProperty.call(node, 'val')) {
      const {
        val,
        left,
        right,
        level
      } = node
      if (result[level]) {
        result[level].push(val)
      } else {
        result[level] = [val]
      }

      const toNextLevel = _toLevel(level + 1)
      queue.push(toNextLevel(left), toNextLevel(right))
    }
  }
  return result
}
// @lc code=end
