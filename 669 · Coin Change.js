export class Solution {
  /**
   * @param coins: a list of integer
   * @param amount: a total amount of money amount
   * @return: the fewest number of coins that you need to make up
   */
  coinChange(coins, amount) {
    // Solution 1:
    // dp[amount] = min(dp[amount-coins[i]]+1,..., dp[amount-coins[coins.length-1]]+1)
    const dp = Array(amount + 1)
    dp[0] = 0
    for (let bagSize = 1; bagSize <= amount; bagSize++) {
      dp[bagSize] = Number.MAX_VALUE
      for (let i = 0; i < coins.length; i++) {
        const coin = coins[i]
        const possibleChildren = bagSize - coin
        if (possibleChildren < 0) continue
        if (dp[possibleChildren] === Number.MAX_VALUE) continue

        dp[bagSize] = Math.min(dp[bagSize], dp[possibleChildren] + 1)
      }
    }

    return dp[amount] === Number.MAX_VALUE ? -1 : dp[amount]
  }
}
