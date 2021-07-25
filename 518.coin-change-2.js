/*
 * @lc app=leetcode id=518 lang=javascript
 *
 * [518] Coin Change 2
 *
 * https://leetcode.com/problems/coin-change-2/description/
 *
 * algorithms
 * Medium (52.75%)
 * Likes:    3300
 * Dislikes: 79
 * Total Accepted:    200.4K
 * Total Submissions: 378.5K
 * Testcase Example:  '5\n[1,2,5]'
 *
 * You are given an integer array coins representing coins of different
 * denominations and an integer amount representing a total amount of money.
 *
 * Return the number of combinations that make up that amount. If that amount
 * of money cannot be made up by any combination of the coins, return 0.
 *
 * You may assume that you have an infinite number of each kind of coin.
 *
 * The answer is guaranteed to fit into a signed 32-bit integer.
 *
 *
 * Example 1:
 *
 *
 * Input: amount = 5, coins = [1,2,5]
 * Output: 4
 * Explanation: there are four ways to make up the amount:
 * 5=5
 * 5=2+2+1
 * 5=2+1+1+1
 * 5=1+1+1+1+1
 *
 *
 * Example 2:
 *
 *
 * Input: amount = 3, coins = [2]
 * Output: 0
 * Explanation: the amount of 3 cannot be made up just with coins of 2.
 *
 *
 * Example 3:
 *
 *
 * Input: amount = 10, coins = [10]
 * Output: 1
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= coins.length <= 300
 * 1 <= coins[i] <= 5000
 * All the values of coins are unique.
 * 0 <= amount <= 5000
 *
 *
 */

// @lc code=start
/**
 * coin problem, 動態規劃
 *
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
const change = function (amount, coins) {
  const dp = new Array(coins.length).fill(0).map(() => new Array(amount + 1).fill(0))
  dp[0] = dp[0].map((_, tmpAmount) => tmpAmount % coins[0] === 0 ? 1 : 0)
  dp.forEach(row => { row[0] = 1 })

  for (let untilIdx = 1; untilIdx < coins.length; untilIdx++) {
    const coin = coins[untilIdx]
    for (let tmpAmount = 1; tmpAmount <= amount; tmpAmount++) {
      dp[untilIdx][tmpAmount] = dp[untilIdx - 1][tmpAmount] + (
        tmpAmount - coin < 0
          ? 0
          : dp[untilIdx][tmpAmount - coin]
      )
    }
  }

  return dp[coins.length - 1][amount]
}
// @lc code=end