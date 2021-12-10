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
  // [0, 1, 2]

  const possibles = []

  const _helper = (queenIdxList, slashSet1, slashSet2) => {
    if (queenIdxList.length === n) {
      possibles.push(queenIdxList)
    }

    for (let i = 0; i < n; i++) {
      if (!queenIdxList.includes(i)) {
        const colIdx = i
        const rowIdx = queenIdxList.length
        if (
          !slashSet1.has(rowIdx + colIdx) &&
          !slashSet2.has(rowIdx - colIdx)
        ) {
          _helper(
            [...queenIdxList, i],
            new Set(slashSet1).add(rowIdx + colIdx),
            new Set(slashSet2).add(rowIdx - colIdx)
          )
        }
      }
    }
  }

  _helper([], new Set(), new Set())

  // [[0, 1, 2],[3,2,0]]
  return possibles.map(possible => {
    // [0, 1, 2]
    return possible.map(queenColIdx => {
      const row = new Array(n).fill('.')
      row[queenColIdx] = 'Q'
      return row.join('')
    })
  })
}

// solveNQueens(4)
// @lc code=end
