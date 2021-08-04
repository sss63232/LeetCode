/*
 * @lc app=leetcode id=331 lang=javascript
 *
 * [331] Verify Preorder Serialization of a Binary Tree
 *
 * https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/description/
 *
 * algorithms
 * Medium (41.34%)
 * Likes:    1084
 * Dislikes: 62
 * Total Accepted:    83.7K
 * Total Submissions: 202K
 * Testcase Example:  '"9,3,4,#,#,1,#,#,2,#,6,#,#"'
 *
 * One way to serialize a binary tree is to use preorder traversal. When we
 * encounter a non-null node, we record the node's value. If it is a null node,
 * we record using a sentinel value such as '#'.
 *
 * For example, the above binary tree can be serialized to the string
 * "9,3,4,#,#,1,#,#,2,#,6,#,#", where '#' represents a null node.
 *
 * Given a string of comma-separated values preorder, return true if it is a
 * correct preorder traversal serialization of a binary tree.
 *
 * It is guaranteed that each comma-separated value in the string must be
 * either an integer or a character '#' representing null pointer.
 *
 * You may assume that the input format is always valid.
 *
 *
 * For example, it could never contain two consecutive commas, such as
 * "1,,3".
 *
 *
 * Note: You are not allowed to reconstruct the tree.
 *
 *
 * Example 1:
 * Input: preorder = "9,3,4,#,#,1,#,#,2,#,6,#,#"
 * Output: true
 * Example 2:
 * Input: preorder = "1,#"
 * Output: false
 * Example 3:
 * Input: preorder = "9,#,#,1"
 * Output: false
 *
 *
 * Constraints:
 *
 *
 * 1 <= preorder.length <= 10^4
 * preoder consist of integers in the range [0, 100] and '#' separated by
 * commas ','.
 *
 *
 */

// @lc code=start
/**
 * @param {string} preorder
 * @return {boolean}
 */
const isValidSerialization = function (preorder) {
  const vals = preorder.split(',')

  let inDegree = 0
  let outDegree = 0

  for (let i = 0; i < vals.length; i++) {
    const val = vals[i]
    if (i === 0) {
      if (val === '#') {
        return vals.length === 1
      } else {
        outDegree += 2
      }
    } else {
      if (val === '#') {
        inDegree++
      } else {
        outDegree += 2
        inDegree++
      }
    }

    if (i !== vals.length - 1 && inDegree >= outDegree) return false
  }

  return inDegree === outDegree
}
// @lc code=end