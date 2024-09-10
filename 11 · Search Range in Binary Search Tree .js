import { TreeNode } from "/opt/node/lib/lintcode/index.js"

/**
 * Definition of TreeNode:
 * class TreeNode {
 *   constructor(val, left=null, right=null) {
 *     this.val = val;
 *     this.left = left;
 *     this.right = right;
 *   }
 * }
 */

// https://www.lintcode.com/problem/search-range-in-binary-search-tree/
export class Solution {
  /**
   * @param root: param root: The root of the binary search tree
   * @param k1: An integer
   * @param k2: An integer
   * @return: return: Return all keys that k1<=key<=k2 in ascending order
   */
  
  searchRange(root, k1, k2) {
    // write your code here
    const _getInRangeNodeList = (node) => {
      if (!node) return []

      const { val, left, right } = node
      if (val < k1) {
        return _getInRangeNodeList(right)
      } else if (k2 < val) {
        return _getInRangeNodeList(left)
      } else {
        return [
          ..._getInRangeNodeList(left),
          val,
          ..._getInRangeNodeList(right),
        ]
      }
    }

    return _getInRangeNodeList(root)
  }
}
