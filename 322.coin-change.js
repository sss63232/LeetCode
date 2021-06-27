/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 *
 * https://leetcode.com/problems/coin-change/description/
 *
 * algorithms
 * Medium (32.15%)
 * Likes:    2375
 * Dislikes: 84
 * Total Accepted:    259K
 * Total Submissions: 803.2K
 * Testcase Example:  '[1,2,5]\n11'
 *
 * You are given coins of different denominations and a total amount of money
 * amount. Write a function to compute the fewest number of coins that you need
 * to make up that amount. If that amount of money cannot be made up by any
 * combination of the coins, return -1.
 *
 * Example 1:
 *
 *
 * Input: coins = [1, 2, 5], amount = 11
 * Output: 3
 * Explanation: 11 = 5 + 5 + 1
 *
 * Example 2:
 *
 *
 * Input: coins = [2], amount = 3
 * Output: -1
 *
 *
 * Note:
 * You may assume that you have an infinite number of each kind of coin.
 *
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function (coins, amount) {
  if (amount === 0) return 0
  if (Math.min(...coins) > amount) return -1

  const dp = new Map()
  dp.set(0, 0)
  coins.forEach(coin => dp.set(coin, 1))

  const _getFewestOf = coinsAmount => {
    if (coinsAmount < 0) return -1
    if (dp.has(coinsAmount)) return dp.get(coinsAmount)

    const candidates = coins
      .map(coin => coinsAmount - coin)
      .map(_getFewestOf)
      .filter(fewest => fewest >= 0)

    const curFewest = candidates.length
      ? Math.min(...candidates) + 1
      : -1

    dp.set(coinsAmount, curFewest)
    return curFewest
  }

  return _getFewestOf(amount)
}

// @lc code=end
