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
  const output = []
  if (root) {
    const queue = [{
      level: 0,
      node: root
    }]
    while (queue.length > 0) {
      const levelNode = queue.shift()
      const {
        level,
        node: {
          val,
          left,
          right
        }
      } = levelNode

      if (!output[level]) {
        output[level] = [val]
      } else {
        output[level].push(val)
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

  return output
}
// @lc code=end
