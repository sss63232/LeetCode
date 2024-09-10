/*
 * @lc app=leetcode id=115 lang=javascript
 *
 * [115] Distinct Subsequences
 *
 * https://leetcode.com/problems/distinct-subsequences/description/
 *
 * algorithms
 * Hard (47.40%)
 * Likes:    6709
 * Dislikes: 292
 * Total Accepted:    446.9K
 * Total Submissions: 928K
 * Testcase Example:  '"rabbbit"\n"rabbit"'
 *
 * Given two strings s and t, return the number of distinct subsequences of s
 * which equals t.
 *
 * The test cases are generated so that the answer fits on a 32-bit signed
 * integer.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "rabbbit", t = "rabbit"
 * Output: 3
 * Explanation:
 * As shown below, there are 3 ways you can generate "rabbit" from s.
 * rabbbit
 * rabbbit
 * rabbbit
 *
 *
 * Example 2:
 *
 *
 * Input: s = "babgbag", t = "bag"
 * Output: 5
 * Explanation:
 * As shown below, there are 5 ways you can generate "bag" from s.
 * babgbag
 * babgbag
 * babgbag
 * babgbag
 * babgbag
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length, t.length <= 1000
 * s and t consist of English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s_longerString
 * @param {string} t_target
 * @return {number}
 */
const numDistinct = (s_longerString, t_target) => {
  const dp = Array(s_longerString.length + 1)
    .fill([])
    .map(() => Array(t_target.length + 1).fill(0))

  /**
    dp[i][j]: s前i個字元，t前j個字元，s子序列中t出現的個數
    dp[0][0]=1, 表示s前0個字元為''，t前0個字元為''
  */
  for (let sIdx = 0; sIdx <= s_longerString.length; sIdx++) {
    dp[sIdx][0] = 1
  }

  for (let sIdx = 1; sIdx <= s_longerString.length; sIdx++) {
    for (let tIdx = 1; tIdx <= t_target.length; tIdx++) {
      if (s_longerString[sIdx - 1] === t_target[tIdx - 1]) {
        dp[sIdx][tIdx] = dp[sIdx - 1][tIdx - 1] + dp[sIdx - 1][tIdx]
      } else {
        dp[sIdx][tIdx] = dp[sIdx - 1][tIdx]
      }
    }
  }

  return dp[s_longerString.length][t_target.length]
}
// @lc code=end
