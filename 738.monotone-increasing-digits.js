/*
 * @lc app=leetcode id=738 lang=javascript
 *
 * [738] Monotone Increasing Digits
 *
 * https://leetcode.com/problems/monotone-increasing-digits/description/
 *
 * algorithms
 * Medium (48.14%)
 * Likes:    1327
 * Dislikes: 105
 * Total Accepted:    55.6K
 * Total Submissions: 115.1K
 * Testcase Example:  '10'
 *
 * An integer has monotone increasing digits if and only if each pair of
 * adjacent digits x and y satisfy x <= y.
 *
 * Given an integer n, return the largest number that is less than or equal to
 * n with monotone increasing digits.
 *
 *
 * Example 1:
 *
 *
 * Input: n = 10
 * Output: 9
 *
 *
 * Example 2:
 *
 *
 * Input: n = 1234
 * Output: 1234
 *
 *
 * Example 3:
 *
 *
 * Input: n = 332
 * Output: 299
 *
 *
 *
 * Constraints:
 *
 *
 * 0 <= n <= 10^9
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function (n) {
  const numberList = n
    .toString()
    .split("")
    .map((numberString) => Number(numberString))

  if (numberList.length <= 1) return n

  let startIdxOfNines = null

  for (let i = numberList.length - 1; i > 0; i--) {
    if (numberList[i - 1] > numberList[i]) {
      numberList[i - 1] = numberList[i - 1] - 1
      startIdxOfNines = i
    }
  }

  if (startIdxOfNines !== null) {
    for (let i = 0; i < numberList.length; i++) {
      if (i >= startIdxOfNines) {
        numberList[i] = 9
      }
    }
  }
  return Number(numberList.join(""))
}
// @lc code=end
