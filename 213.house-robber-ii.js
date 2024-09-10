/*
 * @lc app=leetcode id=213 lang=javascript
 *
 * [213] House Robber II
 *
 * https://leetcode.com/problems/house-robber-ii/description/
 *
 * algorithms
 * Medium (42.15%)
 * Likes:    9937
 * Dislikes: 158
 * Total Accepted:    830.8K
 * Total Submissions: 2M
 * Testcase Example:  '[2,3,2]'
 *
 * You are a professional robber planning to rob houses along a street. Each
 * house has a certain amount of money stashed. All houses at this place are
 * arranged in a circle. That means the first house is the neighbor of the last
 * one. Meanwhile, adjacent houses have a security system connected, and it
 * will automatically contact the police if two adjacent houses were broken
 * into on the same night.
 *
 * Given an integer array nums representing the amount of money of each house,
 * return the maximum amount of money you can rob tonight without alerting the
 * police.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [2,3,2]
 * Output: 3
 * Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money
 * = 2), because they are adjacent houses.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,2,3,1]
 * Output: 4
 * Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
 * Total amount you can rob = 1 + 3 = 4.
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [1,2,3]
 * Output: 3
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 100
 * 0 <= nums[i] <= 1000
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 0) return 0
  if (nums.length <= 2) return Math.max(...nums)

  const robFrom = (numberList) => {
    const n = numberList.length
    if (n === 0) return 0
    if (n <= 2) return Math.max(...numberList)
    // idx, from 0~n-1
    const dp = Array(n)
    // formula: dp[i] = max(dp[i-2] + numberList[i], dp[i-1])
    dp[0] = numberList[0]
    dp[1] = Math.max(...numberList.slice(0, 2))
    for (let i = 2; i < n; i++) {
      dp[i] = Math.max(dp[i - 2] + numberList[i], dp[i - 1])
    }

    return dp[n - 1]
  }

  return Math.max(
    robFrom(nums.slice(0, nums.length - 1)),
    robFrom(nums.slice(1))
  )
}

// @lc code=end
