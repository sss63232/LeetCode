/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 *
 * https://leetcode.com/problems/coin-change/description/
 *
 * algorithms
 * Medium (44.21%)
 * Likes:    18992
 * Dislikes: 454
 * Total Accepted:    1.9M
 * Total Submissions: 4.3M
 * Testcase Example:  '[1,2,5]\n11'
 *
 * You are given an integer array coins representing coins of different
 * denominations and an integer amount representing a total amount of money.
 *
 * Return the fewest number of coins that you need to make up that amount. If
 * that amount of money cannot be made up by any combination of the coins,
 * return -1.
 *
 * You may assume that you have an infinite number of each kind of coin.
 *
 *
 * Example 1:
 *
 *
 * Input: coins = [1,2,5], amount = 11
 * Output: 3
 * Explanation: 11 = 5 + 5 + 1
 *
 *
 * Example 2:
 *
 *
 * Input: coins = [2], amount = 3
 * Output: -1
 *
 *
 * Example 3:
 *
 *
 * Input: coins = [1], amount = 0
 * Output: 0
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= coins.length <= 12
 * 1 <= coins[i] <= 2^31 - 1
 * 0 <= amount <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (amount === 0) return 0
  if (coins.length === 1 && amount % coins[0] !== 0) return -1

  const dp = Array(amount + 1).fill(Number.MAX_VALUE)
  dp[0] = 0

  for (let bagSize = 1; bagSize <= amount; bagSize++) {
    for (
      let selectableCoinsEndIdx = 0;
      selectableCoinsEndIdx < coins.length;
      selectableCoinsEndIdx++
    ) {
      const coin = coins[selectableCoinsEndIdx]

      if (bagSize - coin < 0) continue
      dp[bagSize] = Math.min(dp[bagSize], dp[bagSize - coin] + 1)
    }
  }

  return dp[amount] === Number.MAX_VALUE ? -1 : dp[amount]
}
// @lc code=end
