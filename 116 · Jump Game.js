export class Solution {
  /**
   * @param a: A list of integers
   * @return: A boolean
   */
  canJump(a) {
    // Solution1
    const n = a.length
    const dp = Array(n).fill(0)
    dp[0] = 1
    for (let i = 1; i < n; i++) {
      for (let j = 0; j < i; j++) {
        if (j + a[j] >= i) {
          dp[i] += dp[j]
        }
      }
    }

    return dp[n - 1] > 0
  }
}
