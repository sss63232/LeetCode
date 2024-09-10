/*
 * @lc app=leetcode id=416 lang=javascript
 *
 * [416] Partition Equal Subset Sum
 *
 * https://leetcode.com/problems/partition-equal-subset-sum/description/
 *
 * algorithms
 * Medium (46.42%)
 * Likes:    12352
 * Dislikes: 253
 * Total Accepted:    910.9K
 * Total Submissions: 2M
 * Testcase Example:  '[1,5,11,5]'
 *
 * Given an integer array nums, return true if you can partition the array into
 * two subsets such that the sum of the elements in both subsets is equal or
 * false otherwise.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,5,11,5]
 * Output: true
 * Explanation: The array can be partitioned as [1, 5, 5] and [11].
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,2,3,5]
 * Output: false
 * Explanation: The array cannot be partitioned into equal sum subsets.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 200
 * 1 <= nums[i] <= 100
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const sum = nums.reduce((acc, cur) => acc + cur)
  if (sum % 2 === 1) return false
  const target = sum / 2
  const dp = new Array(target + 1).fill(0)
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    for (let j = target; j >= num; j--) {
      dp[j] = Math.max(dp[j], dp[j - num] + num)
      if (dp[j] === target) return true
    }
  }

  return dp[target] === target
}
// @lc code=end
