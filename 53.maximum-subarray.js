/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 *
 * https://leetcode.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (45.74%)
 * Likes:    6543
 * Dislikes: 293
 * Total Accepted:    803.2K
 * Total Submissions: 1.8M
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * Given an integer array nums, find the contiguous subarray (containing at
 * least one number) which has the largest sum and return its sum.
 *
 * Example:
 *
 *
 * Input: [-2,1,-3,4,-1,2,1,-5,4],
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 *
 *
 * Follow up:
 *
 * If you have figured out the O(n) solution, try coding another solution using
 * the divide and conquer approach, which is more subtle.
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

/**
  * references:
  * @see [詳細解讀動態規劃的實現, 易理解 - 最大子序和 - 力扣（LeetCode）](https://leetcode-cn.com/problems/maximum-subarray/solution/xiang-xi-jie-du-dong-tai-gui-hua-de-shi-xian-yi-li/)
  */
const maxSubArray = function (nums) {
  let maxSumOfEndingOnPre = nums[0]
  let maxSoFar = nums[0]
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i]
    const maxSumOfEndingOnCur = num + (
      maxSumOfEndingOnPre > 0
        ? maxSumOfEndingOnPre
        : 0
    )
    maxSoFar = Math.max(maxSoFar, maxSumOfEndingOnCur)
    maxSumOfEndingOnPre = maxSumOfEndingOnCur
  }
  return maxSoFar
}
// @lc code=end
