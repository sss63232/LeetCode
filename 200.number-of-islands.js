/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 *
 * https://leetcode.com/problems/number-of-islands/description/
 *
 * algorithms
 * Medium (49.12%)
 * Likes:    7999
 * Dislikes: 241
 * Total Accepted:    999.9K
 * Total Submissions: 2M
 * Testcase Example:  '[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]'
 *
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and
 * '0's (water), return the number of islands.
 *
 * An island is surrounded by water and is formed by connecting adjacent lands
 * horizontally or vertically. You may assume all four edges of the grid are
 * all surrounded by water.
 *
 *
 * Example 1:
 *
 *
 * Input: grid = [
 * ⁠ ["1","1","1","1","0"],
 * ⁠ ["1","1","0","1","0"],
 * ⁠ ["1","1","0","0","0"],
 * ⁠ ["0","0","0","0","0"]
 * ]
 * Output: 1
 *
 *
 * Example 2:
 *
 *
 * Input: grid = [
 * ⁠ ["1","1","0","0","0"],
 * ⁠ ["1","1","0","0","0"],
 * ⁠ ["0","0","1","0","0"],
 * ⁠ ["0","0","0","1","1"]
 * ]
 * Output: 3
 *
 *
 *
 * Constraints:
 *
 *
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 300
 * grid[i][j] is '0' or '1'.
 *
 *
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
  const cols = grid[0].length
  if (cols <= 0) {
    return 0
  }

  const rows = grid.length
  const _turnZero = (grid) => (x, y) => {
    if (
      x < 0 ||
            x >= rows ||
            y < 0 ||
            y >= cols ||
            grid[x][y] === '0'
    ) {
      return
    }

    grid[x][y] = '0'

    _turnZero(grid)(x + 1, y)
    _turnZero(grid)(x - 1, y)
    _turnZero(grid)(x, y + 1)
    _turnZero(grid)(x, y - 1)
  }

  let islandsCount = 0
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === '1') {
        islandsCount++
        _turnZero(grid)(i, j)
      }
    }
  }

  return islandsCount
}
// @lc code=end
