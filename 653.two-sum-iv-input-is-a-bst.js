/*
 * @lc app=leetcode id=653 lang=javascript
 *
 * [653] Two Sum IV - Input is a BST
 *
 * https://leetcode.com/problems/two-sum-iv-input-is-a-bst/description/
 *
 * algorithms
 * Easy (56.60%)
 * Likes:    2303
 * Dislikes: 161
 * Total Accepted:    207.7K
 * Total Submissions: 366K
 * Testcase Example:  '[5,3,6,2,4,null,7]\n9'
 *
 * Given the root of a Binary Search Tree and a target number k, return true if
 * there exist two elements in the BST such that their sum is equal to the
 * given target.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [5,3,6,2,4,null,7], k = 9
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: root = [5,3,6,2,4,null,7], k = 28
 * Output: false
 *
 *
 * Example 3:
 *
 *
 * Input: root = [2,1,3], k = 4
 * Output: true
 *
 *
 * Example 4:
 *
 *
 * Input: root = [2,1,3], k = 1
 * Output: false
 *
 *
 * Example 5:
 *
 *
 * Input: root = [2,1,3], k = 3
 * Output: true
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [1, 10^4].
 * -10^4 <= Node.val <= 10^4
 * root is guaranteed to be a valid binary search tree.
 * -10^5 <= k <= 10^5
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
 * @param {number} k
 * @return {boolean}
 */
const findTarget = function (root, k) {
  const preNumbersSet = new Set()
  let ans = false
  const _traverse = node => {
    if (!node || ans) return

    if (preNumbersSet.has(k - node.val)) {
      ans = true
      return
    }

    preNumbersSet.add(node.val)

    _traverse(node.left)
    _traverse(node.right)
  }

  _traverse(root)
  return ans

  // // iteratively
  // const preNumberSet = new Set()
  // const stack = [root]
  // while (stack.length) {
  //   const cur = stack.pop()
  //   const { val, left, right } = cur
  //   if (preNumberSet.has(k - val)) return true

  //   left && stack.push(left)
  //   right && stack.push(right)
  //   preNumberSet.add(val)
  // }

  // return false
}
// @lc code=end
