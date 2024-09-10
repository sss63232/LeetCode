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


// https://www.lintcode.com/problem/480/
export class Solution {
  /**
   * @param root: the root of the binary tree
   * @return: all root-to-leaf paths
   *          we will sort your return value in output
   */
  binaryTreePaths(root) {
    // write your code here

    // @return number[][] | null
    const _getPathsFrom = (treeNode) => {
      if (!treeNode) {
        return []
      }

      let pathList = []
      const { left, right, val } = treeNode
      const leftPathList = _getPathsFrom(left)
      const rightPathList = _getPathsFrom(right)
      if (leftPathList.length) {
        pathList = [...leftPathList.map((path) => [val, ...path])]
      }
      if (rightPathList.length) {
        pathList = [...pathList, ...rightPathList.map((path) => [val, ...path])]
      }

      if (!pathList.length) {
        pathList = [[val]]
      }

      return pathList
    }

    return _getPathsFrom(root).map((path) => path.join("->"))
  }
}
