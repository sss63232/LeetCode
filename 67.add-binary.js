/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 *
 * https://leetcode.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (47.86%)
 * Likes:    3302
 * Dislikes: 392
 * Total Accepted:    661.9K
 * Total Submissions: 1.4M
 * Testcase Example:  '"11"\n"1"'
 *
 * Given two binary strings a and b, return their sum as a binary string.
 *
 *
 * Example 1:
 * Input: a = "11", b = "1"
 * Output: "100"
 * Example 2:
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 *
 *
 * Constraints:
 *
 *
 * 1 <= a.length, b.length <= 10^4
 * a and b consist only of '0' or '1' characters.
 * Each string does not contain leading zeros except for the zero itself.
 *
 *
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
  while (a.length > b.length)b = `0${b}`
  while (b.length > a.length)a = `0${a}`

  let result = ''
  let idx = a.length - 1
  let carry = 0

  while (idx >= 0) {
    const sum = parseInt(a[idx]) + parseInt(b[idx]) + carry
    result = `${sum % 2}${result}`
    carry = Math.floor(sum / 2)
    idx--
  }

  return carry > 0
    ? `1${result}`
    : result
}
// @lc code=end
