/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 *
 * https://leetcode.com/problems/longest-increasing-subsequence/description/
 *
 * algorithms
 * Medium (55.65%)
 * Likes:    21010
 * Dislikes: 454
 * Total Accepted:    1.8M
 * Total Submissions: 3.2M
 * Testcase Example:  '[10,9,2,5,3,7,101,18]'
 *
 * Given an integer array nums, return the length of the longest strictly
 * increasing subsequence.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [10,9,2,5,3,7,101,18]
 * Output: 4
 * Explanation: The longest increasing subsequence is [2,3,7,101], therefore
 * the length is 4.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [0,1,0,3,2,3]
 * Output: 4
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [7,7,7,7,7,7,7]
 * Output: 1
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 2500
 * -10^4 <= nums[i] <= 10^4
 *
 *
 *
 * Follow up: Can you come up with an algorithm that runs in O(n log(n)) time
 * complexity?
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const n = nums.length
  if (n === 1) return 1
  // idx from 0 to n-1
  const dp = Array(n)
  dp[0] = 1

  let longestSoFar = 1
  for (let endIdx = 1; endIdx < n; endIdx++) {
    const endNum = nums[endIdx]
    dp[endIdx] = 1
    for (let j = 0; j < endIdx; j++) {
      if (nums[j] < endNum) {
        dp[endIdx] = Math.max(dp[endIdx], dp[j] + 1)
      }
    }
    
    longestSoFar = Math.max(longestSoFar, dp[endIdx])
  }

  return longestSoFar
}
// @lc code=end
