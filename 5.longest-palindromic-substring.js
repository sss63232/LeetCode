/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 *
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (30.90%)
 * Likes:    12220
 * Dislikes: 750
 * Total Accepted:    1.4M
 * Total Submissions: 4.5M
 * Testcase Example:  '"babad"'
 *
 * Given a string s, return the longest palindromic substring in s.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "cbbd"
 * Output: "bb"
 *
 *
 * Example 3:
 *
 *
 * Input: s = "a"
 * Output: "a"
 *
 *
 * Example 4:
 *
 *
 * Input: s = "ac"
 * Output: "a"
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 1000
 * s consist of only digits and English letters (lower-case and/or
 * upper-case),
 *
 *
 */

// @lc code=start
/**
 * palindrome
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  const _centerExpand = (left, right) => {
    while (
      left >= 0 &&
      right <= s.length - 1 &&
      s[left] === s[right]
    ) {
      left--
      right++
    }
    return s.slice(left + 1, right)
  }

  const _getLongestFromMid = idx => {
    const possible1 = _centerExpand(idx, idx)
    const possible2 = _centerExpand(idx, idx + 1)
    return possible1.length > possible2.length
      ? possible1
      : possible2
  }

  let longestSoFar = s[0]
  for (let i = 0; i < s.length; i++) {
    const curLongest = _getLongestFromMid(i)
    longestSoFar = curLongest.length > longestSoFar.length
      ? curLongest
      : longestSoFar
  }

  return longestSoFar
}
// @lc code=end
