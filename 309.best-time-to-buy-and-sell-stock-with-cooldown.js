/*
 * @lc app=leetcode id=309 lang=javascript
 *
 * [309] Best Time to Buy and Sell Stock with Cooldown
 *
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/description/
 *
 * algorithms
 * Medium (58.46%)
 * Likes:    9443
 * Dislikes: 324
 * Total Accepted:    551.7K
 * Total Submissions: 934.5K
 * Testcase Example:  '[1,2,3,0,2]'
 *
 * You are given an array prices where prices[i] is the price of a given stock
 * on the i^th day.
 *
 * Find the maximum profit you can achieve. You may complete as many
 * transactions as you like (i.e., buy one and sell one share of the stock
 * multiple times) with the following restrictions:
 *
 *
 * After you sell your stock, you cannot buy stock on the next day (i.e.,
 * cooldown one day).
 *
 *
 * Note: You may not engage in multiple transactions simultaneously (i.e., you
 * must sell the stock before you buy again).
 *
 *
 * Example 1:
 *
 *
 * Input: prices = [1,2,3,0,2]
 * Output: 3
 * Explanation: transactions = [buy, sell, cooldown, buy, sell]
 *
 *
 * Example 2:
 *
 *
 * Input: prices = [1]
 * Output: 0
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= prices.length <= 5000
 * 0 <= prices[i] <= 1000
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
  // status:
  // 0 with stock
  // 1 without stock: sold stock
  // 2 without stock: after sold ~ freeze ~ before buy

  // dayIdx from 0 to n-1
  const dp = Array(n)
    .fill([])
    .map(() => Array(3).fill(0))

  dp[0][0] = -prices[0]
  dp[0][1] = 0
  dp[0][2] = 0
  for (let dayIdx = 1; dayIdx < n; dayIdx++) {
    const price = prices[dayIdx]
    dp[dayIdx][0] = Math.max(dp[dayIdx - 1][0], dp[dayIdx - 1][2] - price)
    dp[dayIdx][1] = dp[dayIdx - 1][0] + price
    dp[dayIdx][2] = Math.max(dp[dayIdx - 1][2], dp[dayIdx - 1][1])
  }

  return Math.max(...dp[n - 1])
}
// @lc code=end
