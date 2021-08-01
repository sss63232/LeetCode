/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 *
 * https://leetcode.com/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (39.06%)
 * Likes:    2259
 * Dislikes: 4104
 * Total Accepted:    923K
 * Total Submissions: 2.4M
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * Given a string s, determine if it is a palindrome, considering only
 * alphanumeric characters and ignoring cases.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 * Explanation: "amanaplanacanalpanama" is a palindrome.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "race a car"
 * Output: false
 * Explanation: "raceacar" is not a palindrome.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 2 * 10^5
 * s consists only of printable ASCII characters.
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
const isPalindrome = function (s) {
  const validChars = s.toLowerCase().replace(/[^a-z0-9]/g, '')

  let left = 0
  let right = validChars.length - 1
  while (left < right) {
    if (validChars[left] !== validChars[right]) return false
    left++
    right--
  }
  return true
}
// @lc code=end
