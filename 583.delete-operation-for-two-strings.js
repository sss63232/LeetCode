/*
 * @lc app=leetcode id=583 lang=javascript
 *
 * [583] Delete Operation for Two Strings
 *
 * https://leetcode.com/problems/delete-operation-for-two-strings/description/
 *
 * algorithms
 * Medium (61.91%)
 * Likes:    5805
 * Dislikes: 87
 * Total Accepted:    273.1K
 * Total Submissions: 436.5K
 * Testcase Example:  '"sea"\n"eat"'
 *
 * Given two strings word1 and word2, return the minimum number of steps
 * required to make word1 and word2 the same.
 *
 * In one step, you can delete exactly one character in either string.
 *
 *
 * Example 1:
 *
 *
 * Input: word1 = "sea", word2 = "eat"
 * Output: 2
 * Explanation: You need one step to make "sea" to "ea" and another step to
 * make "eat" to "ea".
 *
 *
 * Example 2:
 *
 *
 * Input: word1 = "leetcode", word2 = "etco"
 * Output: 4
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= word1.length, word2.length <= 500
 * word1 and word2 consist of only lowercase English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  if (word1 === word2) return 0

  const dp = Array(word1.length + 1)
    .fill([])
    .map(() => Array(word2.length + 1).fill(0))

  for (let i = 1; i <= word1.length; i++) {
    dp[i][0] = i
  }

  for (let j = 1; j <= word2.length; j++) {
    dp[0][j] = j
  }

  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1)
      }
    }
  }

  return dp[word1.length][word2.length]
}
// @lc code=end
