/*
 * @lc app=leetcode id=279 lang=javascript
 *
 * [279] Perfect Squares
 *
 * https://leetcode.com/problems/perfect-squares/description/
 *
 * algorithms
 * Medium (54.90%)
 * Likes:    11243
 * Dislikes: 475
 * Total Accepted:    885.1K
 * Total Submissions: 1.6M
 * Testcase Example:  '12'
 *
 * Given an integer n, return the least number of perfect square numbers that
 * sum to n.
 *
 * A perfect square is an integer that is the square of an integer; in other
 * words, it is the product of some integer with itself. For example, 1, 4, 9,
 * and 16 are perfect squares while 3 and 11 are not.
 *
 *
 * Example 1:
 *
 *
 * Input: n = 12
 * Output: 3
 * Explanation: 12 = 4 + 4 + 4.
 *
 *
 * Example 2:
 *
 *
 * Input: n = 13
 * Output: 2
 * Explanation: 13 = 4 + 9.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= n <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  // idx, 0~n
  const dp = Array(n + 1).fill(Infinity)
  dp[0] = 0
  dp[1] = 1
  if ([0, 1].includes(n)) return dp[n]

  for (let amount = 2; amount <= n; amount++) {
    for (let num = 1; num * num <= amount; num++) {
      dp[amount] = Math.min(dp[amount - num * num] + 1, dp[amount])
    }
  }

  return dp[n]
}
// @lc code=end
