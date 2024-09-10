export class Solution {
  /**
   * @param coins: a list of integer
   * @param amount: a total amount of money amount
   * @return: the fewest number of coins that you need to make up
   */
  coinChange(coins, amount) {
    const dp = Array(coins.length + 1)
      .fill([])
      .map(() => Array(amount + 1).fill(Number.MAX_VALUE))

    for (let i = 0; i <= coins.length; i++) {
      dp[i][0] = 0
    }

    for (let i = 1; i <= coins.length; i++) {
      const coin = coins[i - 1]
      for (let j = 1; j <= amount; j++) {
        if (j < coin) {
          dp[i][j] = dp[i - 1][j]
        } else {
          dp[i][j] = Math.min(
            dp[i - 1][j],
            dp[i][j - coin] === Number.MAX_VALUE
              ? Number.MAX_VALUE
              : dp[i][j - coin] + 1
          )
        }
      }
    }

    return dp[coins.length][amount] === Number.MAX_VALUE
      ? -1
      : dp[coins.length][amount]
  }
}
