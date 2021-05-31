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

  const valsCollection = []
  const _collectTo = targetLevel => targetVal => {
    if (!valsCollection[targetLevel]) {
      valsCollection[targetLevel] = [targetVal]
    } else {
      valsCollection[targetLevel].push(targetVal)
    }
  }

  const queue = [{ node: root, level: 0 }]
  while (queue.length) {
    const { node, level } = queue.shift()
    const collect = _collectTo(level)

    if (!node) {
      collect('#')
    } else {
      const { left, right, val } = node
      collect(val)
      const nextLevel = level + 1
      queue.push({ node: left, level: nextLevel }, { node: right, level: nextLevel })
    }
  }

  const _isSymmetricVals = vals => vals.length <= 1 || vals.join('') === vals.reverse().join('')
  return valsCollection.every(_isSymmetricVals)
}
// @lc code=end
