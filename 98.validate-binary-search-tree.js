/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
 *
 * https://leetcode.com/problems/validate-binary-search-tree/description/
 *
 * algorithms
 * Medium (29.20%)
 * Likes:    6744
 * Dislikes: 732
 * Total Accepted:    1.1M
 * Total Submissions: 3.6M
 * Testcase Example:  '[2,1,3]'
 *
 * Given the root of a binary tree, determine if it is a valid binary search
 * tree (BST).
 *
 * A valid BST is defined as follows:
 *
 *
 * The left subtree of a node contains only nodes with keys less than the
 * node's key.
 * The right subtree of a node contains only nodes with keys greater than the
 * node's key.
 * Both the left and right subtrees must also be binary search trees.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: root = [2,1,3]
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: root = [5,1,4,null,null,3,6]
 * Output: false
 * Explanation: The root node's value is 5 but its right child's value is
 * 4.
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [1, 10^4].
 * -2^31 <= Node.val <= 2^31 - 1
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
 * 二叉樹 binary search tree
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = function (root) {
  // // traverse
  // let isValid = true
  // let pre = -Infinity
  // const _inOrderTraverse = node => {
  //   if (!node || !isValid) return
  //   const { val, left, right } = node
  //   _inOrderTraverse(left)
  //   val <= pre
  //     ? isValid = false
  //     : pre = val
  //   _inOrderTraverse(right)
  // }
  // _inOrderTraverse(root)
  // return isValid

  // conquer
  const _isValidWithin = (node, max, min) => {
    if (!node) return true

    const { val, left, right } = node
    if (val >= max || val <= min) return false
    return _isValidWithin(left, val, min) && _isValidWithin(right, max, val)
  }

  return _isValidWithin(root, Infinity, -Infinity)
}
// @lc code=end
