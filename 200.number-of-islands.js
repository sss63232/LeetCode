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
var numIslands = function (grid) {
    const m = grid.length
    const n = grid[0].length
    if (n === 0) {
        return 0
    }

    let islandsCount = 0

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                islandsCount++

                const stack = [[i, j]]
                while (stack.length) {
                    const [x, y] = stack.pop()

                    if (
                        x < 0
                        || x >= m
                        || y < 0
                        || y >= n
                        || grid[x][y] === '0'

                    ) {
                        continue
                    }

                    grid[x][y] = '0'
                    stack.push(
                        [x - 1, y],
                        [x + 1, y],
                        [x, y + 1],
                        [x, y - 1]
                    )
                }
            }
        }
    }

    return islandsCount
};
// @lc code=end

