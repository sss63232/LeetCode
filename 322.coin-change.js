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
var coinChange = function (coins, amount) {
  if (coins.length === 0) return -1
  if (amount === 0) return 0

  const fewestNumbersOfCoinsList = [0]
  for (let coinsAmount = 1; coinsAmount <= amount; coinsAmount++) {
    const candidates = coins.map(coinValue => {
      const difference = coinsAmount - coinValue
      if (difference === 0) {
        return 1
      }

      if (difference > 0) {
        const certainFewestNumber = fewestNumbersOfCoinsList[difference]
        if (certainFewestNumber < 0) {
          return null
        }

        return 1 + certainFewestNumber
      }

      return null
    })

    const validCandidates = candidates.filter(value => value !== null)
    const fewestNumber =
      validCandidates.length > 0 ? Math.min(...validCandidates) : -1

    fewestNumbersOfCoinsList[coinsAmount] = fewestNumber
  }

  return fewestNumbersOfCoinsList[amount]
}

// @lc code=end
