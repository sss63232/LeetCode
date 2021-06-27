/*
 * @lc app=leetcode id=746 lang=javascript
 *
 * [746] Min Cost Climbing Stairs
 *
 * https://leetcode.com/problems/min-cost-climbing-stairs/description/
 *
 * algorithms
 * Easy (53.26%)
 * Likes:    3616
 * Dislikes: 749
 * Total Accepted:    269.4K
 * Total Submissions: 503.6K
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
 * Explanation: Cheapest is: start on cost[1], pay that cost, and go to the
 * top.
 *
 *
 * Example 2:
 *
 *
 * Input: cost = [1,100,1,1,1,100,1,1,100,1]
 * Output: 6
 * Explanation: Cheapest is: start on cost[0], and only step on 1s, skipping
 * cost[3].
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
const minCostClimbingStairs = function (cost) {
  let a = cost[0]
  let b = cost[1]
  for (let i = 2; i < cost.length; i++) {
    if (i % 2 === 0) {
      a = Math.min(a, b) + cost[i]
    } else {
      b = Math.min(a, b) + cost[i]
    }
  }
  return Math.min(a, b)
}
// @lc code=end
