/*
 * @lc app=leetcode id=1143 lang=javascript
 *
 * [1143] Longest Common Subsequence
 *
 * https://leetcode.com/problems/longest-common-subsequence/description/
 *
 * algorithms
 * Medium (58.77%)
 * Likes:    3346
 * Dislikes: 40
 * Total Accepted:    218.5K
 * Total Submissions: 371.7K
 * Testcase Example:  '"abcde"\n"ace"'
 *
 * Given two strings text1 and text2, return the length of their longest common
 * subsequence. If there is no common subsequence, return 0.
 *
 * A subsequence of a string is a new string generated from the original string
 * with some characters (can be none) deleted without changing the relative
 * order of the remaining characters.
 *
 *
 * For example, "ace" is a subsequence of "abcde".
 *
 *
 * A common subsequence of two strings is a subsequence that is common to both
 * strings.
 *
 *
 * Example 1:
 *
 *
 * Input: text1 = "abcde", text2 = "ace"
 * Output: 3
 * Explanation: The longest common subsequence is "ace" and its length is 3.
 *
 *
 * Example 2:
 *
 *
 * Input: text1 = "abc", text2 = "abc"
 * Output: 3
 * Explanation: The longest common subsequence is "abc" and its length is 3.
 *
 *
 * Example 3:
 *
 *
 * Input: text1 = "abc", text2 = "def"
 * Output: 0
 * Explanation: There is no such common subsequence, so the result is 0.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= text1.length, text2.length <= 1000
 * text1 and text2 consist of only lowercase English characters.
 *
 *
 */

// @lc code=start
/**
 * 動態規劃
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = function (text1, text2) {
  const dp = new Array(text1.length)
    .fill(0)
    .map(() => new Array(text2.length).fill(0))

  const firstChar1 = text1[0]
  dp[0] = dp[0].map((_, idx) => text2.slice(0, idx + 1).indexOf(firstChar1) >= 0 ? 1 : 0)
  const firstChar2 = text2[0]
  dp.forEach((row, idx) => {
    row[0] = text1.slice(0, idx + 1).indexOf(firstChar2) >= 0 ? 1 : 0
  })

  for (let i = 1; i < text1.length; i++) {
    for (let j = 1; j < text2.length; j++) {
      if (text1[i] === text2[j]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(
          dp[i][j - 1],
          dp[i - 1][j]
        )
      }
    }
  }

  return dp[text1.length - 1][text2.length - 1]
}
// @lc code=end
