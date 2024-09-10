/*
 * @lc app=leetcode id=343 lang=javascript
 *
 * [343] Integer Break
 *
 * https://leetcode.com/problems/integer-break/description/
 *
 * algorithms
 * Medium (60.43%)
 * Likes:    5118
 * Dislikes: 448
 * Total Accepted:    368.4K
 * Total Submissions: 608.1K
 * Testcase Example:  '2'
 *
 * Given an integer n, break it into the sum of k positive integers, where k >=
 * 2, and maximize the product of those integers.
 *
 * Return the maximum product you can get.
 *
 *
 * Example 1:
 *
 *
 * Input: n = 2
 * Output: 1
 * Explanation: 2 = 1 + 1, 1 × 1 = 1.
 *
 *
 * Example 2:
 *
 *
 * Input: n = 10
 * Output: 36
 * Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.
 *
 *
 *
 * Constraints:
 *
 *
 * 2 <= n <= 58
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  if (n <= 2) return n - 1

  const dp = new Array(n + 1)
  dp[2] = 1

  for (let walker = 3; walker <= n; walker++) {
    dp[walker] = 0 // 使用 Math.max() 比較未初始化的 dp[walker] 與其他值時(L63)，會導致 NaN 的產生
    for (let partOfWalker = 1; partOfWalker <= walker / 2; partOfWalker++) {
      const theOtherPart = walker - partOfWalker
      dp[walker] = Math.max(
        dp[walker],
        partOfWalker * theOtherPart,
        partOfWalker * dp[theOtherPart]
      )
    }
  }

  return dp[n]
}
// @lc code=end
