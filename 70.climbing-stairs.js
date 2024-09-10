/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 *
 * https://leetcode.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (52.95%)
 * Likes:    22121
 * Dislikes: 862
 * Total Accepted:    3.5M
 * Total Submissions: 6.7M
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
var climbStairs = function (n) {
  const getHowManyClimbWays = (steps, stepKinds) => {
    const dp = Array(steps + 1).fill(0)
    dp[0] = 1

    for (let stepsRequired = 1; stepsRequired <= steps; stepsRequired++) {
      for (let stepKindIdx = 0; stepKindIdx < stepKinds.length; stepKindIdx++) {
        const step = stepKinds[stepKindIdx]
        if (stepsRequired - step >= 0) {
          dp[stepsRequired] += dp[stepsRequired - step]
        }
      }
    }

    console.log("TCL=> ~ climbWays ~ dp:", dp)
    return dp[steps]
  }

  return getHowManyClimbWays(n, [1, 2])
}
// @lc code=end
