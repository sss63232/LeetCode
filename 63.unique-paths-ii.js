/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 *
 * https://leetcode.com/problems/unique-paths-ii/description/
 *
 * algorithms
 * Medium (41.79%)
 * Likes:    8810
 * Dislikes: 513
 * Total Accepted:    1M
 * Total Submissions: 2.4M
 * Testcase Example:  '[[0,0,0],[0,1,0],[0,0,0]]'
 *
 * You are given an m x n integer array grid. There is a robot initially
 * located at the top-left corner (i.e., grid[0][0]). The robot tries to move
 * to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only
 * move either down or right at any point in time.
 *
 * An obstacle and space are marked as 1 or 0 respectively in grid. A path that
 * the robot takes cannot include any square that is an obstacle.
 *
 * Return the number of possible unique paths that the robot can take to reach
 * the bottom-right corner.
 *
 * The testcases are generated so that the answer will be less than or equal to
 * 2 * 10^9.
 *
 *
 * Example 1:
 *
 *
 * Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
 * Output: 2
 * Explanation: There is one obstacle in the middle of the 3x3 grid above.
 * There are two ways to reach the bottom-right corner:
 * 1. Right -> Right -> Down -> Down
 * 2. Down -> Down -> Right -> Right
 *
 *
 * Example 2:
 *
 *
 * Input: obstacleGrid = [[0,1],[0,0]]
 * Output: 1
 *
 *
 *
 * Constraints:
 *
 *
 * m == obstacleGrid.length
 * n == obstacleGrid[i].length
 * 1 <= m, n <= 100
 * obstacleGrid[i][j] is 0 or 1.
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const numberOfRows = obstacleGrid.length
  const numberOfCols = obstacleGrid[0].length
  const dp = new Array(numberOfRows)
    .fill([])
    .map(() => new Array(numberOfCols).fill(1))

  let hasObstacleInAnyRowHead = false
  for (let i = 0; i < numberOfRows; i++) {
    if (hasObstacleInAnyRowHead) {
      dp[i][0] = 0
    } else if (obstacleGrid[i][0] === 1) {
      dp[i][0] = 0
      hasObstacleInAnyRowHead = true
    }
  }

  let hasObstacleInColHead = false
  for (let i = 0; i < numberOfCols; i++) {
    if (hasObstacleInColHead) {
      dp[0][i] = 0
    } else if (obstacleGrid[0][i] === 1) {
      dp[0][i] = 0
      hasObstacleInColHead = true
    }
  }

  for (let rowIdx = 1; rowIdx < numberOfRows; rowIdx++) {
    for (let colIdx = 1; colIdx < numberOfCols; colIdx++) {
      if (obstacleGrid[rowIdx][colIdx] === 1) {
        dp[rowIdx][colIdx] = 0
      } else {
        dp[rowIdx][colIdx] = dp[rowIdx - 1][colIdx] + dp[rowIdx][colIdx - 1]
      }
    }
  }
  return dp[numberOfRows - 1][numberOfCols - 1]
}
// @lc code=end
