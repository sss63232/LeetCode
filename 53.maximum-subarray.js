/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 *
 * https://leetcode.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Medium (50.90%)
 * Likes:    34238
 * Dislikes: 1451
 * Total Accepted:    4.2M
 * Total Submissions: 8.2M
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * Given an integer array nums, find the subarray with the largest sum, and
 * return its sum.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: The subarray [4,-1,2,1] has the largest sum 6.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1]
 * Output: 1
 * Explanation: The subarray [1] has the largest sum 1.
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [5,4,-1,7,8]
 * Output: 23
 * Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 *
 *
 *
 * Follow up: If you have figured out the O(n) solution, try coding another
 * solution using the divide and conquer approach, which is more subtle.
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (!nums.length) return 0
  if (nums.length === 1) return nums[0]

  // // DP:
  // let preLargestSum = nums[0]
  // let largestSoFar = nums[0]
  // for (let i = 1; i < nums.length; i++) {
  //   const num = nums[i]
  //   const currentLargestSum = Math.max(preLargestSum + num, num)
  //   largestSoFar = Math.max(largestSoFar, currentLargestSum)
  //   preLargestSum = currentLargestSum
  // }
  // return largestSoFar

  // 貪心：
  let largestSoFar = -Infinity
  let currentSum = 0
  nums.forEach((num) => {
    currentSum += num
    largestSoFar = Math.max(largestSoFar, currentSum)
    if (currentSum < 0) {
      currentSum = 0
    }
  })

  return largestSoFar
}
// @lc code=end
