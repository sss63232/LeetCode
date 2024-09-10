/*
 * @lc app=leetcode id=516 lang=javascript
 *
 * [516] Longest Palindromic Subsequence
 *
 * https://leetcode.com/problems/longest-palindromic-subsequence/description/
 *
 * algorithms
 * Medium (62.79%)
 * Likes:    9617
 * Dislikes: 331
 * Total Accepted:    529.3K
 * Total Submissions: 838.7K
 * Testcase Example:  '"bbbab"'
 *
 * Given a string s, find the longest palindromic subsequence's length in s.
 *
 * A subsequence is a sequence that can be derived from another sequence by
 * deleting some or no elements without changing the order of the remaining
 * elements.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "bbbab"
 * Output: 4
 * Explanation: One possible longest palindromic subsequence is "bbbb".
 *
 *
 * Example 2:
 *
 *
 * Input: s = "cbbd"
 * Output: 2
 * Explanation: One possible longest palindromic subsequence is "bb".
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 1000
 * s consists only of lowercase English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  if (s.length === 1) return 1
  // dp[i][j] => 代表，從 idx_i 到 idx_j 之間的字串的 longest palindromic subsequence

  // Recurrence Relation:
  // dp[i][j] = s[i]===s[j] ? dp[i+1][j-1]+2 : max(dp[i][j-1], dp[i+1][j])

  // Initilization: 每一 Row 最中間的數 dp[i][i]
  const dp = Array(s.length)
    .fill([])
    .map(() => Array(s.length).fill(0)) // idx: 0~n-1

  for (let i = 0; i < s.length; i++) {
    dp[i][i] = 1
  }

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j])
      }
    }
  }

  console.log('TCL=> ~ longestPalindromeSubseq ~ dp:', dp)


  return dp[0][s.length - 1]
}
// @lc code=end
