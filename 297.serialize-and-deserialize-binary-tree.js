/*
 * @lc app=leetcode id=297 lang=javascript
 *
 * [297] Serialize and Deserialize Binary Tree
 *
 * https://leetcode.com/problems/serialize-and-deserialize-binary-tree/description/
 *
 * algorithms
 * Hard (49.82%)
 * Likes:    4010
 * Dislikes: 185
 * Total Accepted:    416.9K
 * Total Submissions: 836.8K
 * Testcase Example:  '[1,2,3,null,null,4,5]'
 *
 * Serialization is the process of converting a data structure or object into a
 * sequence of bits so that it can be stored in a file or memory buffer, or
 * transmitted across a network connection link to be reconstructed later in
 * the same or another computer environment.
 *
 * Design an algorithm to serialize and deserialize a binary tree. There is no
 * restriction on how your serialization/deserialization algorithm should work.
 * You just need to ensure that a binary tree can be serialized to a string and
 * this string can be deserialized to the original tree structure.
 *
 * Clarification: The input/output format is the same as how LeetCode
 * serializes a binary tree. You do not necessarily need to follow this format,
 * so please be creative and come up with different approaches yourself.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,2,3,null,null,4,5]
 * Output: [1,2,3,null,null,4,5]
 *
 *
 * Example 2:
 *
 *
 * Input: root = []
 * Output: []
 *
 *
 * Example 3:
 *
 *
 * Input: root = [1]
 * Output: [1]
 *
 *
 * Example 4:
 *
 *
 * Input: root = [1,2]
 * Output: [1,2]
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [0, 10^4].
 * -1000 <= Node.val <= 1000
 *
 *
 */

// @lc code=start
/**
 * tree Serialization
 *
 *
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = function (root) {
  /// DFS
  // if (!root) return '#'
  // const serializedLeft = serialize(root.left)
  // const serializedRight = serialize(root.right)
  // return `${root.val},${serializedLeft},${serializedRight}`

  /// BFS
  if (!root) return '#'
  const vals = []
  const queue = [root]
  while (queue.length) {
    const cur = queue.shift()
    if (cur === null) {
      vals.push('#')
    } else {
      vals.push(cur.val)
      queue.push(cur.left, cur.right)
    }
  }

  return vals.join(',')
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = function (data) {
  /// DFS
  // const _buildTree = list => {
  //   const rootVal = list.shift()
  //   if (rootVal === '#') return null
  //   const root = new TreeNode(rootVal)
  //   root.left = _buildTree(list)
  //   root.right = _buildTree(list)
  //   return root
  // }
  // return _buildTree(data.split(','))

  /// BFS
  if (data === '#') return null

  const vals = data.split(',')

  const root = new TreeNode(vals[0])
  const queue = [root]
  let cursor = 1
  while (cursor < vals.length) {
    const cur = queue.shift()

    const leftVal = vals[cursor]

    if (leftVal !== '#') {
      cur.left = new TreeNode(leftVal)
      queue.push(cur.left)
    }
    const rightVal = vals[cursor + 1]
    if (rightVal !== '#') {
      cur.right = new TreeNode(rightVal)
      queue.push(cur.right)
    }
    cursor += 2
  }

  return root
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
