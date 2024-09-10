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

// https://www.lintcode.com/problem/453/
export class Solution {
  /**
   * @param root: a TreeNode, the root of the binary tree
   * @return: nothing
   */
  flatten(root) {
    // write your code here

    // @return TreeNode | null
    const _flatterAndGetLastNode = (treeNode) => {
      if (!treeNode) {
        return null
      }

      const leftFlatternedLast = _flatterAndGetLastNode(treeNode.left)
      const rightFlatternedLast = _flatterAndGetLastNode(treeNode.right)
      const originalRight = treeNode.right

      // 如果有 leftFlatternedLast 才需要插入，
      // 不然 treeNode.left 本來就是 null 了，
      // 不需要做其他事
      if (leftFlatternedLast) {
        treeNode.right = treeNode.left
        treeNode.left = null
        leftFlatternedLast.right = originalRight
      }

      if (rightFlatternedLast) {
        return rightFlatternedLast
      }

      if (leftFlatternedLast) {
        return leftFlatternedLast
      }

      return treeNode
    }

    _flatterAndGetLastNode(root)
    return root
  }
}
