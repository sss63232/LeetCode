/*
 * @lc app=leetcode id=107 lang=javascript
 *
 * [107] Binary Tree Level Order Traversal II
 *
 * https://leetcode.com/problems/binary-tree-level-order-traversal-ii/description/
 *
 * algorithms
 * Medium (55.21%)
 * Likes:    2026
 * Dislikes: 237
 * Total Accepted:    408.8K
 * Total Submissions: 740.4K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given the root of a binary tree, return the bottom-up level order traversal
 * of its nodes' values. (i.e., from left to right, level by level from leaf to
 * root).
 *
 *
 * Example 1:
 *
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[15,7],[9,20],[3]]
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
const levelOrderBottom = function (root) {
  const output = []
  if (root) {
    const queue = [
      {
        level: 0,
        node: root
      }
    ]
    while (queue.length) {
      const levelNode = queue.shift()
      const {
        level,
        node: { val, left, right }
      } = levelNode

      if (output[level]) {
        output[level].push(val)
      } else {
        output[level] = [val]
      }

      if (left) {
        queue.push({
          level: level + 1,
          node: left
        })
      }
      if (right) {
        queue.push({
          level: level + 1,
          node: right
        })
      }
    }
  }

  return output.reverse()
}
// @lc code=end
