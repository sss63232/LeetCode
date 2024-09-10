/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
 *
 * https://leetcode.com/problems/validate-binary-search-tree/description/
 *
 * algorithms
 * Medium (33.09%)
 * Likes:    16840
 * Dislikes: 1377
 * Total Accepted:    2.4M
 * Total Submissions: 7.3M
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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  // if(!root){
  //     return true
  // }

  // const {val, left, right} = root
  // if(isValidBST(left) && isValidBST(right)){
  //     if(left!==null && right!==null){
  //         return left.val < val && val < right.val
  //     } else if (right!==null){
  //         return val < right.val
  //     } else if (left!==null) {
  //         return left.val < val
  //     } else {
  //         return true
  //     }
  // }

  // return false

  // Answer 2
  function validate(node, min, max) {
    if (!node) return true

    if (
      (min !== null && node.val <= min) ||
      (max !== null && node.val >= max)
    ) {
      return false
    }

    return (
      validate(node.left, min, node.val) && validate(node.right, node.val, max)
    )
  }

  return validate(root, null, null)
}
// @lc code=end
