/*
 * @lc app=leetcode id=688 lang=javascript
 *
 * [688] Knight Probability in Chessboard
 *
 * https://leetcode.com/problems/knight-probability-in-chessboard/description/
 *
 * algorithms
 * Medium (50.13%)
 * Likes:    1229
 * Dislikes: 229
 * Total Accepted:    58K
 * Total Submissions: 115.5K
 * Testcase Example:  '3\n2\n0\n0'
 *
 * On an NxN chessboard, a knight starts at the r-th row and c-th column and
 * attempts to make exactly K moves. The rows and columns are 0 indexed, so the
 * top-left square is (0, 0), and the bottom-right square is (N-1, N-1).
 *
 * A chess knight has 8 possible moves it can make, as illustrated below. Each
 * move is two squares in a cardinal direction, then one square in an
 * orthogonal direction.
 *
 *
 *
 *
 *
 *
 *
 * Each time the knight is to move, it chooses one of eight possible moves
 * uniformly at random (even if the piece would go off the chessboard) and
 * moves there.
 *
 * The knight continues moving until it has made exactly K moves or has moved
 * off the chessboard. Return the probability that the knight remains on the
 * board after it has stopped moving.
 *
 *
 *
 * Example:
 *
 *
 * Input: 3, 2, 0, 0
 * Output: 0.0625
 * Explanation: There are two moves (to (1,2), (2,1)) that will keep the knight
 * on the board.
 * From each of those positions, there are also two moves that will keep the
 * knight on the board.
 * The total probability the knight stays on the board is 0.0625.
 *
 *
 *
 *
 * Note:
 *
 *
 * N will be between 1 and 25.
 * K will be between 0 and 100.
 * The knight always initially starts on the board.
 *
 *
 */

// @lc code=start
/**
 * @param {number} N
 * @param {number} K
 * @param {number} r
 * @param {number} c
 * @return {number}
 */
const knightProbability = function (N, K, r, c) {
  const dx = [1, 1, 2, 2, -1, -1, -2, -2]
  const dy = [2, -2, 1, -1, 2, -2, 1, -1]

  const cacheMap = new Map()

  const _getValidTimes = (N, K, r, c) => {
    if (r < 0 || r >= N || c < 0 || c >= N) {
      return 0
    }
    if (K === 0) {
      return 1
    }

    const key = `${K}_${r}_${c}`
    if (cacheMap.has(key)) {
      return cacheMap.get(key)
    }

    let curTimes = 0
    for (let i = 0; i < 8; i++) {
      curTimes += _getValidTimes(N, K - 1, r + dx[i], c + dy[i])
    }

    cacheMap.set(key, curTimes)
    return curTimes
  }

  return _getValidTimes(N, K, r, c) / Math.pow(8, K)
}
// @lc code=end
