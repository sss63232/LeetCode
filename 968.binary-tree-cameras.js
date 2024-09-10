/*
 * @lc app=leetcode id=968 lang=javascript
 *
 * [968] Binary Tree Cameras
 *
 * https://leetcode.com/problems/binary-tree-cameras/description/
 *
 * algorithms
 * Hard (46.75%)
 * Likes:    5360
 * Dislikes: 78
 * Total Accepted:    145.6K
 * Total Submissions: 311.2K
 * Testcase Example:  '[0,0,null,0,0]'
 *
 * You are given the root of a binary tree. We install cameras on the tree
 * nodes where each camera at a node can monitor its parent, itself, and its
 * immediate children.
 *
 * Return the minimum number of cameras needed to monitor all nodes of the
 * tree.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [0,0,null,0,0]
 * Output: 1
 * Explanation: One camera is enough to monitor all nodes if placed as shown.
 *
 *
 * Example 2:
 *
 *
 * Input: root = [0,0,null,0,null,0,null,null,0]
 * Output: 2
 * Explanation: At least two cameras are needed to monitor all nodes of the
 * tree. The above image shows one of the valid configurations of camera
 * placement.
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [1, 1000].
 * Node.val == 0
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
 * @return {number}
 */
var minCameraCover = function (root) {
  // Install cameras on leaf's parents

  // node status:
  // 0 uncovered
  // 1 with camera
  // 2 covered

  // situations:
  // two children are 2, parent is 0
  // any children is 0, parent is 1  => this situation needs to be checked earlier than the next one
  // any children is 1, parent is 2


  // null nodes need to be set to 2

  let result = 0
  const traverse = (node) => {
    if (node === null) return 2

    const leftStatus = traverse(node.left)
    const rightStatus = traverse(node.right)

    if (leftStatus === 2 && rightStatus === 2) return 0
    if (leftStatus === 0 || rightStatus === 0) {
      result++
      return 1
    }
    if (leftStatus === 1 || rightStatus === 1) return 2
  }

  // root needs to additionally check
  if (traverse(root) === 0) {
    result++
  }

  return result
}
// @lc code=end
