/*
 * @lc app=leetcode id=402 lang=javascript
 *
 * [402] Remove K Digits
 *
 * https://leetcode.com/problems/remove-k-digits/description/
 *
 * algorithms
 * Medium (28.76%)
 * Likes:    4147
 * Dislikes: 172
 * Total Accepted:    204.7K
 * Total Submissions: 706.1K
 * Testcase Example:  '"1432219"\n3'
 *
 * Given string num representing a non-negative integer num, and an integer k,
 * return the smallest possible integer after removing k digits from num.
 *
 *
 * Example 1:
 *
 *
 * Input: num = "1432219", k = 3
 * Output: "1219"
 * Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219
 * which is the smallest.
 *
 *
 * Example 2:
 *
 *
 * Input: num = "10200", k = 1
 * Output: "200"
 * Explanation: Remove the leading 1 and the number is 200. Note that the
 * output must not contain leading zeroes.
 *
 *
 * Example 3:
 *
 *
 * Input: num = "10", k = 2
 * Output: "0"
 * Explanation: Remove all the digits from the number and it is left with
 * nothing which is 0.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= k <= num.length <= 10^5
 * num consists of only digits.
 * num does not have any leading zeros except for the zero itself.
 *
 *
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  if (num.length === k) {
    return '0'
  }

  const stack = []
  for (let i = 0; i < num.length; i++) {
    const digitNum = Number(num[i])
    while (k && stack[stack.length - 1] > digitNum) {
      stack.pop()
      k--
    }

    stack.push(digitNum)
  }

  while (k) {
    stack.pop()
    k--
  }

  while (stack[0] === 0) {
    stack.shift()
  }

  return stack.length ? stack.join('') : '0'
}
// @lc code=end
