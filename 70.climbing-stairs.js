/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 *
 * https://leetcode.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (48.96%)
 * Likes:    6961
 * Dislikes: 216
 * Total Accepted:    999.8K
 * Total Submissions: 2M
 * Testcase Example:  '2'
 *
 * You are climbing a staircase. It takes n steps to reach the top.
 *
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can
 * you climb to the top?
 *
 *
 * Example 1:
 *
 *
 * Input: n = 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 *
 *
 * Example 2:
 *
 *
 * Input: n = 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= n <= 45
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  const memo = new Map()

  const _getStepsOf = top => {
    if (top === 1) return 1
    if (top === 2) return 2

    if (memo.has(top)) return memo.get(top)

    const steps = _getStepsOf(top - 1) + _getStepsOf(top - 2)
    memo.set(top, steps)
    return steps
  }

  return _getStepsOf(n)
}
// @lc code=end
