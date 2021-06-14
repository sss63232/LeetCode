/*
 * @lc app=leetcode id=1091 lang=javascript
 *
 * [1091] Shortest Path in Binary Matrix
 *
 * https://leetcode.com/problems/shortest-path-in-binary-matrix/description/
 *
 * algorithms
 * Medium (40.50%)
 * Likes:    1294
 * Dislikes: 80
 * Total Accepted:    92.1K
 * Total Submissions: 227.1K
 * Testcase Example:  '[[0,1],[1,0]]'
 *
 * Given an n x n binary matrix grid, return the length of the shortest clear
 * path in the matrix. If there is no clear path, return -1.
 *
 * A clear path in a binary matrix is a path from the top-left cell (i.e., (0,
 * 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:
 *
 *
 * All the visited cells of the path are 0.
 * All the adjacent cells of the path are 8-directionally connected (i.e., they
 * are different and they share an edge or a corner).
 *
 *
 * The length of a clear path is the number of visited cells of this path.
 *
 *
 * Example 1:
 *
 *
 * Input: grid = [[0,1],[1,0]]
 * Output: 2
 *
 *
 * Example 2:
 *
 *
 * Input: grid = [[0,0,0],[1,1,0],[1,1,0]]
 * Output: 4
 *
 *
 * Example 3:
 *
 *
 * Input: grid = [[1,0,0],[1,1,0],[1,1,0]]
 * Output: -1
 *
 *
 *
 * Constraints:
 *
 *
 * n == grid.length
 * n == grid[i].length
 * 1 <= n <= 100
 * grid[i][j] is 0 or 1
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
const shortestPathBinaryMatrix = function (grid) {
  const n = grid.length
  const targetCellIdx = n - 1
  if (grid[0][0] === 1 || grid[targetCellIdx][targetCellIdx] === 1) return -1

  const dx = [0, 1, 1, 1, 0, -1, -1, -1]
  const dy = [-1, -1, 0, 1, 1, 1, 0, -1]

  const discovered = new Set()

  const queue = [{ rowIdx: 0, colIdx: 0, level: 1 }]
  while (queue.length) {
    const cur = queue.shift()
    if (
      cur.rowIdx === targetCellIdx &&
      cur.colIdx === targetCellIdx
    ) return cur.level

    for (let i = 0; i < 8; i++) {
      const nextRowIdx = cur.rowIdx + dy[i]
      const nextColIdx = cur.colIdx + dx[i]
      const nextLevel = cur.level + 1
      const key = `${nextRowIdx}_${nextColIdx}`
      if (
        nextRowIdx >= 0 &&
        nextRowIdx < n &&
        nextColIdx >= 0 &&
        nextColIdx < n &&
        !discovered.has(key) &&
        grid[nextRowIdx][nextColIdx] === 0
      ) {
        discovered.add(key)
        queue.push({
          rowIdx: nextRowIdx,
          colIdx: nextColIdx,
          level: nextLevel
        })
      }
    }
  }

  return -1
}
// @lc code=end
