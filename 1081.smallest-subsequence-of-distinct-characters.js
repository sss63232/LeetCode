/*
 * @lc app=leetcode id=1081 lang=javascript
 *
 * [1081] Smallest Subsequence of Distinct Characters
 *
 * https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/description/
 *
 * algorithms
 * Medium (53.76%)
 * Likes:    1269
 * Dislikes: 129
 * Total Accepted:    30.3K
 * Total Submissions: 55.5K
 * Testcase Example:  '"bcabc"'
 *
 * Given a string s, return the lexicographically smallest subsequence of s
 * that contains all the distinct characters of s exactly once.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "bcabc"
 * Output: "abc"
 *
 *
 * Example 2:
 *
 *
 * Input: s = "cbacdcbc"
 * Output: "acdb"
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 1000
 * s consists of lowercase English letters.
 *
 *
 *
 * Note: This question is the same as 316:
 * https://leetcode.com/problems/remove-duplicate-letters/
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function (s) {
  const stack = []

  const charList = s.split('')
  const fingerprint = charList.reduce(
    (acc, cur) => ({
      ...acc,
      [cur]: (acc[cur] || 0) + 1
    }),
    {}
  )

  for (let i = 0; i < charList.length; i++) {
    const char = charList[i]

    fingerprint[char]--

    if (!stack.includes(char)) {
      let stackTail = stack[stack.length - 1]
      while (stackTail > char && fingerprint[stackTail]) {
        stack.pop()
        stackTail = stack[stack.length - 1]
      }
      stack.push(char)
    }
  }

  return stack.join('')
}
// @lc code=end
