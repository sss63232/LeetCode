/*
 * @lc app=leetcode id=1049 lang=javascript
 *
 * [1049] Last Stone Weight II
 *
 * https://leetcode.com/problems/last-stone-weight-ii/description/
 *
 * algorithms
 * Medium (55.53%)
 * Likes:    3133
 * Dislikes: 120
 * Total Accepted:    93.2K
 * Total Submissions: 166.5K
 * Testcase Example:  '[2,7,4,1,8,1]'
 *
 * You are given an array of integers stones where stones[i] is the weight of
 * the i^th stone.
 *
 * We are playing a game with the stones. On each turn, we choose any two
 * stones and smash them together. Suppose the stones have weights x and y with
 * x <= y. The result of this smash is:
 *
 *
 * If x == y, both stones are destroyed, and
 * If x != y, the stone of weight x is destroyed, and the stone of weight y has
 * new weight y - x.
 *
 *
 * At the end of the game, there is at most one stone left.
 *
 * Return the smallest possible weight of the left stone. If there are no
 * stones left, return 0.
 *
 *
 * Example 1:
 *
 *
 * Input: stones = [2,7,4,1,8,1]
 * Output: 1
 * Explanation:
 * We can combine 2 and 4 to get 2, so the array converts to [2,7,1,8,1] then,
 * we can combine 7 and 8 to get 1, so the array converts to [2,1,1,1] then,
 * we can combine 2 and 1 to get 1, so the array converts to [1,1,1] then,
 * we can combine 1 and 1 to get 0, so the array converts to [1], then that's
 * the optimal value.
 *
 *
 * Example 2:
 *
 *
 * Input: stones = [31,26,33,21,40]
 * Output: 5
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= stones.length <= 30
 * 1 <= stones[i] <= 100
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
  const totalStoneSum = stones.reduce((acc, cur) => acc + cur)
  const targetGroupSum = Math.floor(totalStoneSum / 2)
  // max weight sum by capacity
  const dp = new Array(targetGroupSum + 1).fill(0)
  for (let i = 0; i < stones.length; i++) {
    const stoneWeight = stones[i]
    for (let j = targetGroupSum; j >= stoneWeight; j--) {
      dp[j] = Math.max(dp[j], dp[j - stoneWeight] + stoneWeight)
    }
  }

  const closestPart = dp[targetGroupSum]
  const closestOtherPart = totalStoneSum - dp[targetGroupSum]

  // Cos. using .floor in L72, the closestOtherPart must > closestPart
  return closestOtherPart - closestPart
}
