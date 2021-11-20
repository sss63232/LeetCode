/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 *
 * https://leetcode.com/problems/spiral-matrix/description/
 *
 * algorithms
 * Medium (37.15%)
 * Likes:    4035
 * Dislikes: 677
 * Total Accepted:    511.8K
 * Total Submissions: 1.4M
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 *
 *
 * Example 1:
 *
 *
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * Output: [1,2,3,6,9,8,7,4,5]
 *
 *
 * Example 2:
 *
 *
 * Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 * Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 *
 *
 *
 * Constraints:
 *
 *
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= m, n <= 10
 * -100 <= matrix[i][j] <= 100
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function (matrix) {
  const rows = matrix.length
  const cols = matrix[0].length

  const dx = [1, 0, -1, 0]
  const dy = [0, 1, 0, -1]
  const getNextDirection = directionIdx =>
    directionIdx < 3 ? directionIdx + 1 : 0

  const visited = new Set()
  const cellKeyOf = (x, y) => `${x}_${y}`
  const isAvailable = (x, y) =>
    x >= 0 && x < cols && y >= 0 && y < rows && !visited.has(cellKeyOf(x, y))

  const path = []

  const _helper = (dIdx, rowIdx, colIdx) => {
    if (!isAvailable(colIdx, rowIdx)) return false

    path.push(matrix[rowIdx][colIdx])
    visited.add(cellKeyOf(colIdx, rowIdx))

    if (!_helper(dIdx, rowIdx + dy[dIdx], colIdx + dx[dIdx])) {
      const nextDirection = getNextDirection(dIdx)
      _helper(
        nextDirection,
        rowIdx + dy[nextDirection],
        colIdx + dx[nextDirection]
      )
    }
  }

  _helper(0, 0, 0)

  return path
}
// @lc code=end
