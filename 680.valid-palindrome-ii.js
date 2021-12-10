/*
 * @lc app=leetcode id=680 lang=javascript
 *
 * [680] Valid Palindrome II
 *
 * https://leetcode.com/problems/valid-palindrome-ii/description/
 *
 * algorithms
 * Easy (37.31%)
 * Likes:    2928
 * Dislikes: 185
 * Total Accepted:    292.9K
 * Total Submissions: 781.8K
 * Testcase Example:  '"aba"'
 *
 * Given a string s, return true if the s can be palindrome after deleting at
 * most one character from it.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "aba"
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: s = "abca"
 * Output: true
 * Explanation: You could delete the character 'c'.
 *
 *
 * Example 3:
 *
 *
 * Input: s = "abc"
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 10^5
 * s consists of lowercase English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 *
 * two pointers
 */
const validPalindrome = function (s) {
  if (s.length <= 2) return true

  const _isPalindrome = arr => {
    if (arr.length === 1) return true

    let left = 0
    let right = arr.length - 1
    while (left < right) {
      if (arr[left] !== arr[right]) return false
      left++
      right--
    }

    return true
  }

  let left = 0
  let right = s.length - 1
  while (left < right) {
    if (s[left] !== s[right]) break
    left++
    right--
  }

  return (
    _isPalindrome(s.slice(left, right)) ||
    _isPalindrome(s.slice(left + 1, right + 1))
  )
}
// @lc code=end
