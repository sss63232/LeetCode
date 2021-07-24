/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
 *
 * https://leetcode.com/problems/binary-tree-paths/description/
 *
 * algorithms
 * Easy (54.98%)
 * Likes:    2824
 * Dislikes: 142
 * Total Accepted:    417K
 * Total Submissions: 753.7K
 * Testcase Example:  '[1,2,3,null,5]'
 *
 * Given the root of a binary tree, return all root-to-leaf paths in any
 * order.
 *
 * A leaf is a node with no children.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,2,3,null,5]
 * Output: ["1->2->5","1->3"]
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1]
 * Output: ["1"]
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [1, 100].
 * -100 <= Node.val <= 100
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
 * binary tree
 * @param {TreeNode} root
 * @return {string[]}
 */
const binaryTreePaths = function (root) {
  const toLeafPaths = []

  const _traverse = (node, path) => {
    if (!node) return

    const { val, left, right } = node
    const curPath = [...path, val]
    if (!left && !right) {
      toLeafPaths.push(curPath)
      return
    }

    _traverse(left, curPath)
    _traverse(right, curPath)
  }

  _traverse(root, [])

  return toLeafPaths.map(path => path.join('->'))
}
// @lc code=end
