/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 *
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 *
 * algorithms
 * Easy (53.81%)
 * Likes:    31270
 * Dislikes: 1181
 * Total Accepted:    5.1M
 * Total Submissions: 9.4M
 * Testcase Example:  '[7,1,5,3,6,4]'
 *
 * You are given an array prices where prices[i] is the price of a given stock
 * on the i^th day.
 *
 * You want to maximize your profit by choosing a single day to buy one stock
 * and choosing a different day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction. If you
 * cannot achieve any profit, return 0.
 *
 *
 * Example 1:
 *
 *
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit
 * = 6-1 = 5.
 * Note that buying on day 2 and selling on day 1 is not allowed because you
 * must buy before you sell.
 *
 *
 * Example 2:
 *
 *
 * Input: prices = [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transactions are done and the max profit =
 * 0.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= prices.length <= 10^5
 * 0 <= prices[i] <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // // dp[i-th 天][持有/不持有]
  // //   const dp = new Array(prices.length).fill(new Array(2).fill(0))
  // //   dp[0][0] = -prices[0]
  // //   dp[0][1] = 0
  // let preWithStock = -prices[0]
  // let preWithoutStock = 0
  // for (let i = 1; i < prices.length; i++) {
  //   const curWithStock = Math.max(preWithStock, -prices[i])
  //   const curWithoutStock = Math.max(preWithoutStock, preWithStock + prices[i])
  //   preWithStock = curWithStock
  //   preWithoutStock = curWithoutStock
  // }
  // return preWithoutStock

  // Greedy Solution:
  let lowestCost = prices[0]
  let maxProfit = 0
  for (let i = 1; i < prices.length; i++) {
    const price = prices[i]
    lowestCost = Math.min(lowestCost, price)
    const profit = price - lowestCost
    maxProfit = Math.max(maxProfit, profit)
  }

  return maxProfit
}
// @lc code=end
