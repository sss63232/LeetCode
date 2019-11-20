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
  const m = obstacleGrid[0].length
  const n = obstacleGrid.length

  if (obstacleGrid[0][0] === 1 || obstacleGrid[n - 1][m - 1] === 1) {
    return 0
  }

  const ans = new Array(n).fill(0).map(() => new Array(m).fill(0))

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (obstacleGrid[i][j] === 1) {
        ans[i][j] = 0
        continue
      }

      if (i === 0 && j === 0) {
        ans[i][j] = 1
        continue
      }

      const upperValue = i - 1 >= 0
        ? ans[i - 1][j]
        : 0
      const leftValue = j - 1 >= 0
        ? ans[i][j - 1]
        : 0

      ans[i][j] = upperValue + leftValue
    }
  }

  return ans[n - 1][m - 1]
}
// @lc code=end
