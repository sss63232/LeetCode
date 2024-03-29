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
var knightProbability = function (n, k, row, column) {
  const dx = [1, 1, -1, -1, 2, 2, -2, -2]
  const dy = [2, -2, 2, -2, 1, -1, 1, -1]

  let remainingMoves = k
  const queue = [{ rowIdx: row, colIdx: column }]
  while (queue.length && remainingMoves) {
    let moveItems = queue.length
    while (moveItems--) {
      const cur = queue.shift()
      for (let i = 0; i < 8; i++) {
        const nextRowIdx = cur.rowIdx + dx[i]
        if (nextRowIdx < 0 || nextRowIdx >= n) {
          continue
        }
        const nextColIdx = cur.colIdx + dy[i]
        if (nextColIdx < 0 || nextColIdx >= n) {
          continue
        }
        queue.push({ rowIdx: nextRowIdx, colIdx: nextColIdx })
      }

    }

    remainingMoves--
  }

  return queue.length / Math.pow(8, k)
};

// const knightProbability = function (N, K, r, c) {
//   const dx = [1, 1, 2, 2, -1, -1, -2, -2]
//   const dy = [2, -2, 1, -1, 2, -2, 1, -1]

//   const cacheMap = new Map()

//   const _inbound = (rowIdx, colIdx) =>
//     rowIdx >= 0 && colIdx >= 0 && rowIdx < N && colIdx < N

//   const _getValidTimes = (remainingSteps, rowIdx, colIdx) => {
//     if (!_inbound(rowIdx, colIdx)) return 0
//     if (remainingSteps === 0) return 1

//     const key = `${remainingSteps}_${rowIdx}_${colIdx}`
//     if (cacheMap.has(key)) return cacheMap.get(key)

//     let curTimes = 0
//     for (let i = 0; i < 8; i++) {
//       curTimes += _getValidTimes(
//         remainingSteps - 1,
//         rowIdx + dx[i],
//         colIdx + dy[i]
//       )
//     }

//     cacheMap.set(key, curTimes)
//     return curTimes
//   }

//   return _getValidTimes(K, r, c) / Math.pow(8, K)
// }
// @lc code=end
