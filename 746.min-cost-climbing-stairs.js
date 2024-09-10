/*
 * @lc app=leetcode id=746 lang=javascript
 *
 * [746] Min Cost Climbing Stairs
 *
 * https://leetcode.com/problems/min-cost-climbing-stairs/description/
 *
 * algorithms
 * Easy (65.84%)
 * Likes:    11481
 * Dislikes: 1774
 * Total Accepted:    1.3M
 * Total Submissions: 1.9M
 * Testcase Example:  '[10,15,20]'
 *
 * You are given an integer array cost where cost[i] is the cost of i^th step
 * on a staircase. Once you pay the cost, you can either climb one or two
 * steps.
 *
 * You can either start from the step with index 0, or the step with index 1.
 *
 * Return the minimum cost to reach the top of the floor.
 *
 *
 * Example 1:
 *
 *
 * Input: cost = [10,15,20]
 * Output: 15
 * Explanation: You will start at index 1.
 * - Pay 15 and climb two steps to reach the top.
 * The total cost is 15.
 *
 *
 * Example 2:
 *
 *
 * Input: cost = [1,100,1,1,1,100,1,1,100,1]
 * Output: 6
 * Explanation: You will start at index 0.
 * - Pay 1 and climb two steps to reach index 2.
 * - Pay 1 and climb two steps to reach index 4.
 * - Pay 1 and climb two steps to reach index 6.
 * - Pay 1 and climb one step to reach index 7.
 * - Pay 1 and climb two steps to reach index 9.
 * - Pay 1 and climb one step to reach the top.
 * The total cost is 6.
 *
 *
 *
 * Constraints:
 *
 *
 * 2 <= cost.length <= 1000
 * 0 <= cost[i] <= 999
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  if (cost.length === 1) return cost[0]

  // the top would be dp[cost.length]
  let minCostOfMinus2Position = 0
  let minCostOfMinus1Position = 0
  let curCost = 0
  // dp[i] = min(dp[i-1]+cost[i-1], dp[i-2]+cost[i-2])
  for (let i = 2; i <= cost.length; i++) {
    curCost = Math.min(
      minCostOfMinus2Position + cost[i - 2],
      minCostOfMinus1Position + cost[i - 1]
    )

    minCostOfMinus2Position = minCostOfMinus1Position
    minCostOfMinus1Position = curCost
  }

  return curCost
}
// @lc code=end
