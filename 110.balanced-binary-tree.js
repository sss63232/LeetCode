/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
 *
 * https://leetcode.com/problems/balanced-binary-tree/description/
 *
 * algorithms
 * Easy (44.72%)
 * Likes:    3609
 * Dislikes: 235
 * Total Accepted:    576.5K
 * Total Submissions: 1.3M
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, determine if it is height-balanced.
 *
 * For this problem, a height-balanced binary tree is defined as:
 *
 *
 * a binary tree in which the left and right subtrees of every node differ in
 * height by no more than 1.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1,2,2,3,3,null,null,4,4]
 * Output: false
 *
 *
 * Example 3:
 *
 *
 * Input: root = []
 * Output: true
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [0, 5000].
 * -10^4 <= Node.val <= 10^4
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
 * @return {boolean}
 */
const isBalanced = function (root) {
  class BalanceNode {
    constructor (balanced, depth) {
      this.balanced = balanced
      this.depth = depth
    }
  }

  const _getBalanceNodeOf = treeNode => {
    if (!treeNode) return new BalanceNode(true, 0)

    const leftBalanceNode = _getBalanceNodeOf(treeNode.left)
    const rightBalanceNode = _getBalanceNodeOf(treeNode.right)

    const balanced = (
      leftBalanceNode.balanced &&
      rightBalanceNode.balanced &&
      Math.abs(leftBalanceNode.depth - rightBalanceNode.depth) <= 1
    )

    const depth = Math.max(leftBalanceNode.depth, rightBalanceNode.depth) + 1

    return new BalanceNode(balanced, depth)
  }

  return _getBalanceNodeOf(root).balanced
}
// @lc code=end
