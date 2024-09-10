/*
 * @lc app=leetcode id=123 lang=javascript
 *
 * [123] Best Time to Buy and Sell Stock III
 *
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/description/
 *
 * algorithms
 * Hard (48.36%)
 * Likes:    9747
 * Dislikes: 195
 * Total Accepted:    659.6K
 * Total Submissions: 1.3M
 * Testcase Example:  '[3,3,5,0,0,3,1,4]'
 *
 * You are given an array prices where prices[i] is the price of a given stock
 * on the i^th day.
 *
 * Find the maximum profit you can achieve. You may complete at most two
 * transactions.
 *
 * Note: You may not engage in multiple transactions simultaneously (i.e., you
 * must sell the stock before you buy again).
 *
 *
 * Example 1:
 *
 *
 * Input: prices = [3,3,5,0,0,3,1,4]
 * Output: 6
 * Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit
 * = 3-0 = 3.
 * Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 =
 * 3.
 *
 * Example 2:
 *
 *
 * Input: prices = [1,2,3,4,5]
 * Output: 4
 * Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit
 * = 5-1 = 4.
 * Note that you cannot buy on day 1, buy on day 2 and sell them later, as you
 * are engaging multiple transactions at the same time. You must sell before
 * buying again.
 *
 *
 * Example 3:
 *
 *
 * Input: prices = [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transaction is done, i.e. max profit = 0.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= prices.length <= 10^5
 * 0 <= prices[i] <= 10^5
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const n = prices.length
  // idx from 0 ~ n-1
  // 第 1 天到最後一天
  const dp = Array(n)
    .fill([])
    .map(() => Array(4).fill(0))

  // 0 -> 1st time bought stock
  // 1 -> 1st time sold stock
  // 2 -> 2nd time bought stock
  // 3 -> 2nd time sold stock
  dp[0][0] = -prices[0]
  dp[0][1] = 0
  dp[0][2] = -prices[0]
  dp[0][3] = 0
  for (let i = 1; i < n; i++) {
    const price = prices[i]
    dp[i][0] = Math.max(dp[i - 1][0], -price)
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + price)
    dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] - price)
    dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] + price)
  }

  return dp[n - 1][3]
}
// @lc code=end
