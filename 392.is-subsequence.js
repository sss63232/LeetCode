/*
 * @lc app=leetcode id=392 lang=javascript
 *
 * [392] Is Subsequence
 *
 * https://leetcode.com/problems/is-subsequence/description/
 *
 * algorithms
 * Easy (48.05%)
 * Likes:    9726
 * Dislikes: 542
 * Total Accepted:    1.6M
 * Total Submissions: 3.4M
 * Testcase Example:  '"abc"\n"ahbgdc"'
 *
 * Given two strings s and t, return true if s is a subsequence of t, or false
 * otherwise.
 *
 * A subsequence of a string is a new string that is formed from the original
 * string by deleting some (can be none) of the characters without disturbing
 * the relative positions of the remaining characters. (i.e., "ace" is a
 * subsequence of "abcde" while "aec" is not).
 *
 *
 * Example 1:
 * Input: s = "abc", t = "ahbgdc"
 * Output: true
 * Example 2:
 * Input: s = "axc", t = "ahbgdc"
 * Output: false
 *
 *
 * Constraints:
 *
 *
 * 0 <= s.length <= 100
 * 0 <= t.length <= 10^4
 * s and t consist only of lowercase English letters.
 *
 *
 *
 * Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k
 * >= 10^9, and you want to check one by one to see if t has its subsequence.
 * In this scenario, how would you change your code?
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length > t.length) return false
  if (s === t) return true
  //   // Solution 1: 雙指針
  //   let foundCount = 0
  //   let startFindingIdx = 0
  //   for (let i = 0; i < s.length; i++) {
  //     const char = s[i]
  //     for (let j = startFindingIdx; j < t.length; j++) {
  //       if (t[j] === char) {
  //         foundCount++
  //         if (foundCount === s.length) return true

  //         startFindingIdx = j + 1
  //         break
  //       }
  //     }
  //   }
  //   return foundCount === s.length

  // Solution 2:
  const dp = Array(s.length + 1)
    .fill([])
    .map(() => Array(t.length + 1).fill(0))

  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= t.length; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = dp[i][j - 1]
      }
    }
  }

  return dp[s.length][t.length] === s.length
}
// @lc code=end
