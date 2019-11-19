/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (28.97%)
 * Likes:    6834
 * Dislikes: 403
 * Total Accepted:    1.2M
 * Total Submissions: 4M
 * Testcase Example:  '"abcabcbb"'
 *
 * Given a string, find the length of the longest substring without repeating
 * characters.
 *
 *
 * Example 1:
 *
 *
 * Input: "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 *
 *
 * Example 2:
 *
 *
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 *
 *
 *
 * Example 3:
 *
 *
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * ⁠            Note that the answer must be a substring, "pwke" is a
 * subsequence and not a substring.
 *
 *
 *
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s === '') { return 0 }

  const _hasDuplicationIn = charArr => {
    const charArrLength = charArr.length
    if (charArrLength <= 1) { return false }

    const set = new Set(charArr)
    return set.size < charArrLength
  }

  const inputCharArr = s.split('')
  const inputLength = inputCharArr.length

  let frontPivot = 0
  let endPivot = 0

  let longestLength = 0
  while (frontPivot < inputLength) {
    const substringArr = inputCharArr.slice(endPivot, frontPivot + 1)
    if (_hasDuplicationIn(substringArr)) {
      endPivot++
    } else {
      longestLength = Math.max(substringArr.length, longestLength)
    }

    frontPivot++
  }

  return longestLength
}
// @lc code=end
