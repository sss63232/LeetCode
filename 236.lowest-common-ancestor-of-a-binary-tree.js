/*
 * @lc app=leetcode id=236 lang=javascript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
 *
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/
 *
 * algorithms
 * Medium (50.42%)
 * Likes:    6568
 * Dislikes: 220
 * Total Accepted:    714.8K
 * Total Submissions: 1.4M
 * Testcase Example:  '[3,5,1,6,2,0,8,null,null,7,4]\n5\n1'
 *
 * Given a binary tree, find the lowest common ancestor (LCA) of two given
 * nodes in the tree.
 *
 * According to the definition of LCA on Wikipedia: “The lowest common ancestor
 * is defined between two nodes p and q as the lowest node in T that has both p
 * and q as descendants (where we allow a node to be a descendant of
 * itself).”
 *
 *
 * Example 1:
 *
 *
 * Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
 * Output: 3
 * Explanation: The LCA of nodes 5 and 1 is 3.
 *
 *
 * Example 2:
 *
 *
 * Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
 * Output: 5
 * Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant
 * of itself according to the LCA definition.
 *
 *
 * Example 3:
 *
 *
 * Input: root = [1,2], p = 1, q = 2
 * Output: 1
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [2, 10^5].
 * -10^9 <= Node.val <= 10^9
 * All Node.val are unique.
 * p != q
 * p and q will exist in the tree.
 *
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 二叉樹，binary search tree
 *
 * AB 要嘛同在 left
 * AB 要嘛同在 right
 * AB 要嘛分別在 left, right
 *
 *
 * 在root为根的 left, right 子樹中找A,B的LCA:
 * 如果找到了 LCA, 就返回这个LCA
 *
 * 如果沒找到，且有找到A，就返回A
 * 如果沒找到，且有碰到B，就返回B
 * 如果都没有，就返回null
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function (root, p, q) {
  if (!root) return null
  if (root === p || root === q) return root

  const { left, right } = root
  const leftResult = lowestCommonAncestor(left, p, q)
  const rightResult = lowestCommonAncestor(right, p, q)
  if (leftResult && rightResult) return root
  if (leftResult) return leftResult
  if (rightResult) return rightResult
  return null
}
// @lc code=end
