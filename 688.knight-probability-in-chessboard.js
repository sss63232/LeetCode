/*
 * @lc app=leetcode id=688 lang=javascript
 *
 * [688] Knight Probability in Chessboard
 *
 * https://leetcode.com/problems/knight-probability-in-chessboard/description/
 *
 * algorithms
 * Medium (56.22%)
 * Likes:    3831
 * Dislikes: 474
 * Total Accepted:    157.1K
 * Total Submissions: 279.4K
 * Testcase Example:  '3\n2\n0\n0'
 *
 * On an n x n chessboard, a knight starts at the cell (row, column) and
 * attempts to make exactly k moves. The rows and columns are 0-indexed, so the
 * top-left cell is (0, 0), and the bottom-right cell is (n - 1, n - 1).
 * 
 * A chess knight has eight possible moves it can make, as illustrated below.
 * Each move is two cells in a cardinal direction, then one cell in an
 * orthogonal direction.
 * 
 * Each time the knight is to move, it chooses one of eight possible moves
 * uniformly at random (even if the piece would go off the chessboard) and
 * moves there.
 * 
 * The knight continues moving until it has made exactly k moves or has moved
 * off the chessboard.
 * 
 * Return the probability that the knight remains on the board after it has
 * stopped moving.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: n = 3, k = 2, row = 0, column = 0
 * Output: 0.06250
 * Explanation: There are two moves (to (1,2), (2,1)) that will keep the knight
 * on the board.
 * From each of those positions, there are also two moves that will keep the
 * knight on the board.
 * The total probability the knight stays on the board is 0.0625.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: n = 1, k = 0, row = 0, column = 0
 * Output: 1.00000
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= n <= 25
 * 0 <= k <= 100
 * 0 <= row, column <= n - 1
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function (n, k, row, column) {
    const dx = [1, 1, 2, 2, -1, -1, -2, -2]
    const dy = [2, -2, 1, -1, 2, -2, 1, -1]

    const cacheMap = new Map()

    const _inbound = (rowIdx, colIdx) =>
        rowIdx >= 0 && colIdx >= 0 && rowIdx < n && colIdx < n

    const _getValidTimes = (remainingSteps, rowIdx, colIdx) => {
        if (!_inbound(rowIdx, colIdx)) return 0
        if (remainingSteps === 0) return 1

        const key = `${remainingSteps}_${rowIdx}_${colIdx}`
        if (cacheMap.has(key)) return cacheMap.get(key)

        let curTimes = 0
        for (let i = 0; i < 8; i++) {
            curTimes += _getValidTimes(
                remainingSteps - 1,
                rowIdx + dx[i],
                colIdx + dy[i]
            )
        }

        cacheMap.set(key, curTimes)
        return curTimes
    }

    return _getValidTimes(k, row, column) / Math.pow(8, k)
}
// @lc code=end

