/*
 * @lc app=leetcode id=1546 lang=javascript
 *
 * [1546] Maximum Number of Non-Overlapping Subarrays With Sum Equals Target
 *
 * https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/description/
 *
 * algorithms
 * Medium (44.69%)
 * Likes:    549
 * Dislikes: 10
 * Total Accepted:    14.9K
 * Total Submissions: 33.3K
 * Testcase Example:  '[1,1,1,1,1]\n2'
 *
 * Given an array nums and an integer target.
 *
 * Return the maximum number of non-empty non-overlapping subarrays such that
 * the sum of values in each subarray is equal to target.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,1,1,1,1], target = 2
 * Output: 2
 * Explanation: There are 2 non-overlapping subarrays [1,1,1,1,1] with sum
 * equals to target(2).
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [-1,3,5,1,4,2,-9], target = 6
 * Output: 2
 * Explanation: There are 3 subarrays with sum equal to 6.
 * ([5,1], [4,2], [3,5,1,4,2,-9]) but only the first 2 are non-overlapping.
 *
 * Example 3:
 *
 *
 * Input: nums = [-2,6,6,3,5,4,1,2,8], target = 10
 * Output: 3
 *
 *
 * Example 4:
 *
 *
 * Input: nums = [0,0,0], target = 0
 * Output: 3
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 * 0 <= target <= 10^6
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const maxNonOverlapping = function (nums, target) {
  let sum = 0
  let count = 0
  const preSumsSet = new Set()
  preSumsSet.add(0)
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    if (preSumsSet.has(sum - target)) {
      count++
      sum = 0
      preSumsSet.clear()
      preSumsSet.add(0)
    } else {
      preSumsSet.add(sum)
    }
  }

  return count
}
// @lc code=end
