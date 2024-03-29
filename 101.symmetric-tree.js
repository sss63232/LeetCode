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
  //// solution1
  // const check = (left, right) => {
  //   if (!left && !right) return true
  //   if (!!left !== !!right) return false
  //   if (left.val !== right.val) return false
  //   return check(left.left, right.right) && check(left.right, right.left)
  // }
  // return check(root.left, root.right)

  // solution2
  if (!root) return true

  const _isMirror = values => {
    let left = 0
    let right = values.length - 1

    while (left <= right) {
      if (values[left] !== values[right]) return false

      left++
      right--
    }

    return true
  }

  const stack = [root]
  while (stack.length) {
    const lengthOfCurLevel = stack.length
    const values = []
    for (let i = 0; i < lengthOfCurLevel; i++) {
      const cur = stack.shift()
      if (cur) {
        values.push(cur.val)
        stack.push(cur.left, cur.right)
      } else {
        values.push(null)
      }
    }

    if (!_isMirror(values)) return false
  }

  return true
}
// @lc code=end
