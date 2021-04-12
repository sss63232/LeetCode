/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 *
 * https://leetcode.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (42.32%)
 * Likes:    2262
 * Dislikes: 3142
 * Total Accepted:    814K
 * Total Submissions: 1.9M
 * Testcase Example:  '[1,2,3]'
 *
 * Given a non-empty array of decimal digits representing a non-negative
 * integer, increment one to the integer.
 *
 * The digits are stored such that the most significant digit is at the head of
 * the list, and each element in the array contains a single digit.
 *
 * You may assume the integer does not contain any leading zero, except the
 * number 0 itself.
 *
 *
 * Example 1:
 *
 *
 * Input: digits = [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 *
 *
 * Example 2:
 *
 *
 * Input: digits = [4,3,2,1]
 * Output: [4,3,2,2]
 * Explanation: The array represents the integer 4321.
 *
 *
 * Example 3:
 *
 *
 * Input: digits = [0]
 * Output: [1]
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= digits.length <= 100
 * 0 <= digits[i] <= 9
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++
    digits[i] %= 10

    if (digits[i] !== 0) {
      return digits
    }
  }

  return [1, ...digits]
}
// @lc code=end
