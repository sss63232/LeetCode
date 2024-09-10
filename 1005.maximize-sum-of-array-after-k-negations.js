/*
 * @lc app=leetcode id=1005 lang=javascript
 *
 * [1005] Maximize Sum Of Array After K Negations
 *
 * https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/description/
 *
 * algorithms
 * Easy (51.20%)
 * Likes:    1556
 * Dislikes: 114
 * Total Accepted:    95.8K
 * Total Submissions: 186.4K
 * Testcase Example:  '[4,2,3]\n1'
 *
 * Given an integer array nums and an integer k, modify the array in the
 * following way:
 *
 *
 * choose an index i and replace nums[i] with -nums[i].
 *
 *
 * You should apply this process exactly k times. You may choose the same index
 * i multiple times.
 *
 * Return the largest possible sum of the array after modifying it in this
 * way.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [4,2,3], k = 1
 * Output: 5
 * Explanation: Choose index 1 and nums becomes [4,-2,3].
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [3,-1,0,2], k = 3
 * Output: 6
 * Explanation: Choose indices (1, 2, 2) and nums becomes [3,1,0,2].
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [2,-3,-1,5,-4], k = 2
 * Output: 13
 * Explanation: Choose indices (1, 4) and nums becomes [2,3,-1,5,4].
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10^4
 * -100 <= nums[i] <= 100
 * 1 <= k <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  // sort by abs max
  nums.sort((a, b) => Math.abs(b) - Math.abs(a))

  // turn the larger negative value to positive
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0 && k > 0) {
      nums[i] *= -1
      k--
      if (k === 0) break
    }
  }

  // consumer the remaining k
  if (k % 2 === 1) nums[nums.length - 1] *= -1

  return nums.reduce((acc, cur) => acc + cur)
}
// @lc code=end
