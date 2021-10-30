/*
 * @lc app=leetcode id=51 lang=javascript
 *
 * [51] N-Queens
 *
 * https://leetcode.com/problems/n-queens/description/
 *
 * algorithms
 * Hard (52.13%)
 * Likes:    3379
 * Dislikes: 113
 * Total Accepted:    274.2K
 * Total Submissions: 525.7K
 * Testcase Example:  '4'
 *
 * The n-queens puzzle is the problem of placing n queens on an n x n
 * chessboard such that no two queens attack each other.
 *
 * Given an integer n, return all distinct solutions to the n-queens puzzle.
 * You may return the answer in any order.
 *
 * Each solution contains a distinct board configuration of the n-queens'
 * placement, where 'Q' and '.' both indicate a queen and an empty space,
 * respectively.
 *
 *
 * Example 1:
 *
 *
 * Input: n = 4
 * Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
 * Explanation: There exist two distinct solutions to the 4-queens puzzle as
 * shown above
 *
 *
 * Example 2:
 *
 *
 * Input: n = 1
 * Output: [["Q"]]
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= n <= 9
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = function (n) {
  const results = []

  const slash1 = new Set()
  const slash2 = new Set()

  const _helper = (rowIdx, queenIdxList) => {
    if (rowIdx === n) {
      results.push([...queenIdxList])
      return
    }

    for (let columnIdx = 0; columnIdx < n; columnIdx++) {
      if (
        queenIdxList.indexOf(columnIdx) >= 0 ||
        slash1.has(rowIdx + columnIdx) ||
        slash2.has(rowIdx - columnIdx)
      )
        continue

      queenIdxList.push(columnIdx)
      slash1.add(rowIdx + columnIdx)
      slash2.add(rowIdx - columnIdx)

      _helper(rowIdx + 1, queenIdxList)

      queenIdxList.pop()
      slash1.delete(rowIdx + columnIdx)
      slash2.delete(rowIdx - columnIdx)
    }
  }

  _helper(0, [])

  return results.map(result =>
    result.map(queenColIdx => {
      const curRow = new Array(n).fill('.')
      curRow[queenColIdx] = 'Q'
      return curRow.join('')
    })
  )
}

// solveNQueens(4)
// @lc code=end
