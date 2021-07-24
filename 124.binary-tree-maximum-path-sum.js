/*
 * @lc app=leetcode id=124 lang=javascript
 *
 * [124] Binary Tree Maximum Path Sum
 *
 * https://leetcode.com/problems/binary-tree-maximum-path-sum/description/
 *
 * algorithms
 * Hard (36.04%)
 * Likes:    6434
 * Dislikes: 424
 * Total Accepted:    546.3K
 * Total Submissions: 1.5M
 * Testcase Example:  '[1,2,3]'
 *
 * A path in a binary tree is a sequence of nodes where each pair of adjacent
 * nodes in the sequence has an edge connecting them. A node can only appear in
 * the sequence at most once. Note that the path does not need to pass through
 * the root.
 *
 * The path sum of a path is the sum of the node's values in the path.
 *
 * Given the root of a binary tree, return the maximum path sum of any path.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,2,3]
 * Output: 6
 * Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 =
 * 6.
 *
 *
 * Example 2:
 *
 *
 * Input: root = [-10,9,20,null,null,15,7]
 * Output: 42
 * Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 +
 * 7 = 42.
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [1, 3 * 10^4].
 * -1000 <= Node.val <= 1000
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
 * binary tree, recursion
 * @param {TreeNode} root
 * @return {number}
 */
const maxPathSum = function (root) {
  let max = -Infinity

  const _dfs = node => {
    if (!node) return 0

    const { val, left, right } = node
    const leftOuterMax = _dfs(left)
    const rightOuterMax = _dfs(right)

    const innerMax = val + leftOuterMax + rightOuterMax
    max = Math.max(max, innerMax)

    let outerMax = val + Math.max(leftOuterMax, rightOuterMax)
    outerMax = outerMax > 0 ? outerMax : 0

    return outerMax
  }

  _dfs(root)
  return max
}
// @lc code=end
