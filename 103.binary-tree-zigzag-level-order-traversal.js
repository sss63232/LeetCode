/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
 *
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/
 *
 * algorithms
 * Medium (50.12%)
 * Likes:    3223
 * Dislikes: 126
 * Total Accepted:    488.5K
 * Total Submissions: 971.4K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given the root of a binary tree, return the zigzag level order traversal of
 * its nodes' values. (i.e., from left to right, then right to left for the
 * next level and alternate between).
 *
 *
 * Example 1:
 *
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[3],[20,9],[15,7]]
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1]
 * Output: [[1]]
 *
 *
 * Example 3:
 *
 *
 * Input: root = []
 * Output: []
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [0, 2000].
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
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrder = function (root) {

  if (!root) return []

  const result = []
  const queue = [root]
  let fromLeft = true
  while (queue.length) {
    let levelLength = queue.length
    const levelVals = []
    while (levelLength--) {
      const cur = queue.shift()
      levelVals.push(cur.val)
      cur.left && queue.push(cur.left)
      cur.right && queue.push(cur.right)
    }
    if (!fromLeft) {
      levelVals.reverse()
    }
    result.push(levelVals)

    fromLeft = !fromLeft
  }

  return result


  // if (!root) {
  //   return []
  // }

  // const appendLevelNode = level => node => ({ node, level })
  // const isFromLeftToRight = level => level % 2 === 0

  // const result = []
  // const queue = [appendLevelNode(0)(root)]
  // while (queue.length) {
  //   const levelNode = queue.shift()
  //   const {
  //     level,
  //     node
  //   } = levelNode
  //   if (node) {
  //     const {
  //       val,
  //       left,
  //       right
  //     } = node

  //     if (result[level]) {
  //       if (isFromLeftToRight(level)) {
  //         result[level].push(val)
  //       } else {
  //         result[level].unshift(val)
  //       }
  //     } else {
  //       result[level] = [val]
  //     }

  //     const toNextLevel = appendLevelNode(level + 1)
  //     queue.push(toNextLevel(left), toNextLevel(right))
  //   }
  // }

  // return result
}
// @lc code=end
