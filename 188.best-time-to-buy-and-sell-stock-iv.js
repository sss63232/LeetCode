/*
 * @lc app=leetcode id=188 lang=javascript
 *
 * [188] Best Time to Buy and Sell Stock IV
 *
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/description/
 *
 * algorithms
 * Hard (43.33%)
 * Likes:    7474
 * Dislikes: 210
 * Total Accepted:    498.3K
 * Total Submissions: 1.1M
 * Testcase Example:  '2\n[2,4,1]'
 *
 * You are given an integer array prices where prices[i] is the price of a
 * given stock on the i^th day, and an integer k.
 *
 * Find the maximum profit you can achieve. You may complete at most k
 * transactions: i.e. you may buy at most k times and sell at most k times.
 *
 * Note: You may not engage in multiple transactions simultaneously (i.e., you
 * must sell the stock before you buy again).
 *
 *
 * Example 1:
 *
 *
 * Input: k = 2, prices = [2,4,1]
 * Output: 2
 * Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit
 * = 4-2 = 2.
 *
 *
 * Example 2:
 *
 *
 * Input: k = 2, prices = [3,2,6,5,0,3]
 * Output: 7
 * Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit
 * = 6-2 = 4. Then buy on day 5 (price = 0) and sell on day 6 (price = 3),
 * profit = 3-0 = 3.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= k <= 100
 * 1 <= prices.length <= 1000
 * 0 <= prices[i] <= 1000
 *
 *
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  const n = prices.length
  // i-th dayIdx from 0 ~ n-1
  const dp = Array(n)
    .fill([])
    .map(() => Array(2 * k + 1).fill(0)) // [0...2k]

  // 0 => initail state, nothing done yet
  // 1 => 1st bougt stock
  // 2 => 1st sold stock
  // ...
  // 2k-1 => k-th bought stock
  // 2k => k-th sold stock

  // Initialize the status for the 1st day
  for (let statusIdx = 0; statusIdx <= 2 * k; statusIdx++) {
    if (statusIdx % 2 === 1) dp[0][statusIdx] = -prices[0]
  }

  // Initialize the [0] status for every day
  // => actually no need, cos they're all zero already from the dp creation

  // Run through th DP table
  for (let dayIdx = 1; dayIdx < n; dayIdx++) {
    const price = prices[dayIdx]
    for (let statusIdx = 1; statusIdx <= 2 * k; statusIdx++) {
      if (statusIdx % 2 === 1) {
        dp[dayIdx][statusIdx] = Math.max(
          dp[dayIdx - 1][statusIdx],
          dp[dayIdx - 1][statusIdx - 1] - price
        )
      } else {
        dp[dayIdx][statusIdx] = Math.max(
          dp[dayIdx - 1][statusIdx],
          dp[dayIdx - 1][statusIdx - 1] + price
        )
      }
    }
  }

  return dp[n - 1][2 * k]
}
// @lc code=end
