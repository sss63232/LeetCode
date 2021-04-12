/*
 * @lc app=leetcode id=412 lang=javascript
 *
 * [412] Fizz Buzz
 *
 * https://leetcode.com/problems/fizz-buzz/description/
 *
 * algorithms
 * Easy (63.55%)
 * Likes:    1308
 * Dislikes: 1512
 * Total Accepted:    459.2K
 * Total Submissions: 722K
 * Testcase Example:  '3'
 *
 * Given an integer n, return a string array answer (1-indexed) where:
 *
 *
 * answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
 * answer[i] == "Fizz" if i is divisible by 3.
 * answer[i] == "Buzz" if i is divisible by 5.
 * answer[i] == i if non of the above conditions are true.
 *
 *
 *
 * Example 1:
 * Input: n = 3
 * Output: ["1","2","Fizz"]
 * Example 2:
 * Input: n = 5
 * Output: ["1","2","Fizz","4","Buzz"]
 * Example 3:
 * Input: n = 15
 * Output:
 * ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 *
 *
 * Constraints:
 *
 *
 * 1 <= n <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function (n) {
  const ans = []
  for (let i = 1; i <= n; i++) {
    let fb = ''
    if (i % 3 === 0) {
      fb += 'Fizz'
    }

    if (i % 5 === 0) {
      fb += 'Buzz'
    }

    ans[i - 1] = fb || i.toString()
  }

  return ans
}
// @lc code=end
