/*
 * @lc app=leetcode id=188 lang=javascript
 *
 * [188] Best Time to Buy and Sell Stock IV
 *
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/description/
 *
 * algorithms
 * Hard (30.68%)
 * Likes:    2621
 * Dislikes: 143
 * Total Accepted:    189.6K
 * Total Submissions: 616.6K
 * Testcase Example:  '2\n[2,4,1]'
 *
 * You are given an integer array prices where prices[i] is the price of a
 * given stock on the i^th day, and an integer k.
 *
 * Find the maximum profit you can achieve. You may complete at most k
 * transactions.
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
 * 0 <= k <= 100
 * 0 <= prices.length <= 1000
 * 0 <= prices[i] <= 1000
 *
 *
 */

// @lc code=start
/**
 * 動態規劃，股票問題
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (k, prices) {
  const n = prices.length

  const profit = new Array(k)
  for (let j = 0; j <= k; j++) {
    profit[j] = {
      profit_in: -prices[0],
      profit_out: 0
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= k; j++) {
      profit[j] = {
        profit_out: Math.max(
          profit[j].profit_out,
          profit[j].profit_in + prices[i]
        ),
        profit_in: Math.max(
          profit[j].profit_in,
          profit[j - 1].profit_out - prices[i]
        )
      }
    }
  }

  return profit[k].profit_out
}
// @lc code=end
