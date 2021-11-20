/*
 * @lc app=leetcode id=32 lang=javascript
 *
 * [32] Longest Valid Parentheses
 *
 * https://leetcode.com/problems/longest-valid-parentheses/description/
 *
 * algorithms
 * Hard (30.15%)
 * Likes:    6532
 * Dislikes: 222
 * Total Accepted:    431.3K
 * Total Submissions: 1.4M
 * Testcase Example:  '"(()"'
 *
 * Given a string containing just the characters '(' and ')', find the length
 * of the longest valid (well-formed) parentheses substring.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "(()"
 * Output: 2
 * Explanation: The longest valid parentheses substring is "()".
 *
 *
 * Example 2:
 *
 *
 * Input: s = ")()())"
 * Output: 4
 * Explanation: The longest valid parentheses substring is "()()".
 *
 *
 * Example 3:
 *
 *
 * Input: s = ""
 * Output: 0
 *
 *
 *
 * Constraints:
 *
 *
 * 0 <= s.length <= 3 * 10^4
 * s[i] is '(', or ')'.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

var longestValidParentheses = function (s) {
  if (!s) return 0

  const chars = s.split('')
  const dp = new Array(chars.length).fill(0)
  for (let i = 1; i < chars.length; i++) {
    const char = chars[i]
    if (char === ')') {
      if (chars[i - 1] === ')') {
        // xxxxxx))
        if (chars[i - dp[i - 1] - 1] === '(') {
          dp[i] = (dp[i - dp[i - 1] - 2] || 0) + 2 + dp[i - 1]
        }
        // xxx)xxxx))
      } else {
        // xxxxx()
        dp[i] = (dp[i - 2] || 0) + 2
      }
    }
  }

  return Math.max(...dp)
}
// @lc code=end
