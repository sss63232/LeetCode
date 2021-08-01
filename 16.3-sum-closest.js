/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 *
 * https://leetcode.com/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (46.44%)
 * Likes:    3787
 * Dislikes: 191
 * Total Accepted:    619.9K
 * Total Submissions: 1.3M
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * Given an array nums of n integers and an integer target, find three integers
 * in nums such that the sum is closest to target. Return the sum of the three
 * integers. You may assume that each input would have exactly one solution.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [-1,2,1,-4], target = 1
 * Output: 2
 * Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 =
 * 2).
 *
 *
 *
 * Constraints:
 *
 *
 * 3 <= nums.length <= 10^3
 * -10^3 <= nums[i] <= 10^3
 * -10^4 <= target <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 *
 * two pointers
 */
const threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b)

  let closestSum = null
  let closestDiff = Infinity

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      const curSum = nums[i] + nums[left] + nums[right]
      const curDiff = Math.abs(target - curSum)

      if (curDiff < closestDiff) {
        closestDiff = curDiff
        closestSum = curSum
      }

      if (curSum === target) return curSum
      if (curSum > target) {
        right--
      } else {
        left++
      }
    }
  }

  return closestSum
}
// @lc code=end
