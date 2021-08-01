/*
 * @lc app=leetcode id=120 lang=javascript
 *
 * [120] Triangle
 *
 * https://leetcode.com/problems/triangle/description/
 *
 * algorithms
 * Medium (47.37%)
 * Likes:    3388
 * Dislikes: 336
 * Total Accepted:    329K
 * Total Submissions: 691.4K
 * Testcase Example:  '[[2],[3,4],[6,5,7],[4,1,8,3]]'
 *
 * Given a triangle array, return the minimum path sum from top to bottom.
 *
 * For each step, you may move to an adjacent number of the row below. More
 * formally, if you are on index i on the current row, you may move to either
 * index i or index i + 1 on the next row.
 *
 *
 * Example 1:
 *
 *
 * Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
 * Output: 11
 * Explanation: The triangle looks like:
 * ⁠  2
 * ⁠ 3 4
 * ⁠6 5 7
 * 4 1 8 3
 * The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined
 * above).
 *
 *
 * Example 2:
 *
 *
 * Input: triangle = [[-10]]
 * Output: -10
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= triangle.length <= 200
 * triangle[0].length == 1
 * triangle[i].length == triangle[i - 1].length + 1
 * -10^4 <= triangle[i][j] <= 10^4
 *
 *
 *
 * Follow up: Could you do this using only O(n) extra space, where n is the
 * total number of rows in the triangle?
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = function (triangle) {
  // // recursive
  // // overtime...QQ
  // const _dfs = (sum, rowIdx, columnIdx) => {
  //   sum += triangle[rowIdx][columnIdx]
  //   const nextRowIdx = rowIdx + 1
  //   const nextRow = triangle[nextRowIdx]
  //   if (!nextRow) return sum

  //   return Math.min(
  //     _dfs(sum, nextRowIdx, columnIdx),
  //     _dfs(sum, nextRowIdx, columnIdx + 1)
  //   )
  // }

  // return _dfs(0, 0, 0)

  const dp = triangle[triangle.length - 1]

  for (let rowIdx = triangle.length - 2; rowIdx >= 0; rowIdx--) {
    for (let colIdx = 0; colIdx < triangle[rowIdx].length; colIdx++) {
      dp[colIdx] = Math.min(
        dp[colIdx],
        dp[colIdx + 1]
      ) + triangle[rowIdx][colIdx]
    }
  }

  return dp[0]
}
// @lc code=end
