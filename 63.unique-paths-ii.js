/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 *
 * https://leetcode.com/problems/unique-paths-ii/description/
 *
 * algorithms
 * Medium (33.72%)
 * Likes:    1090
 * Dislikes: 181
 * Total Accepted:    235.6K
 * Total Submissions: 698.1K
 * Testcase Example:  '[[0,0,0],[0,1,0],[0,0,0]]'
 *
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in
 * the diagram below).
 *
 * The robot can only move either down or right at any point in time. The robot
 * is trying to reach the bottom-right corner of the grid (marked 'Finish' in
 * the diagram below).
 *
 * Now consider if some obstacles are added to the grids. How many unique paths
 * would there be?
 *
 *
 *
 * An obstacle and empty space is marked as 1 and 0 respectively in the grid.
 *
 * Note: m and n will be at most 100.
 *
 * Example 1:
 *
 *
 * Input:
 * [
 * [0,0,0],
 * [0,1,0],
 * [0,0,0]
 * ]
 * Output: 2
 * Explanation:
 * There is one obstacle in the middle of the 3x3 grid above.
 * There are two ways to reach the bottom-right corner:
 * 1. Right -> Right -> Down -> Down
 * 2. Down -> Down -> Right -> Right
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const rows = obstacleGrid.length
  const cols = obstacleGrid[0].length

  for (let rowIdx = 0; rowIdx < rows; rowIdx++) {
    for (let colIdx = 0; colIdx < cols; colIdx++) {
      if (obstacleGrid[rowIdx][colIdx] === 1) {
        obstacleGrid[rowIdx][colIdx] = 0
      } else if (rowIdx === 0 && colIdx === 0) {
        obstacleGrid[rowIdx][colIdx] = 1
      } else {
        obstacleGrid[rowIdx][colIdx] =
          obstacleGrid[rowIdx][colIdx - 1 >= 0 ? colIdx - 1 : 0] +
          obstacleGrid[rowIdx - 1 >= 0 ? rowIdx - 1 : 0][colIdx]
      }
    }
  }

  return obstacleGrid[rows - 1][obstacleGrid[0].length - 1]
}

uniquePathsWithObstacles([
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
])
// @lc code=end
