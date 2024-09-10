/*
 * @lc app=leetcode id=718 lang=javascript
 *
 * [718] Maximum Length of Repeated Subarray
 *
 * https://leetcode.com/problems/maximum-length-of-repeated-subarray/description/
 *
 * algorithms
 * Medium (50.95%)
 * Likes:    6818
 * Dislikes: 170
 * Total Accepted:    311.6K
 * Total Submissions: 611.6K
 * Testcase Example:  '[1,2,3,2,1]\n[3,2,1,4,7]'
 *
 * Given two integer arrays nums1 and nums2, return the maximum length of a
 * subarray that appears in both arrays.
 *
 *
 * Example 1:
 *
 *
 * Input: nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
 * Output: 3
 * Explanation: The repeated subarray with maximum length is [3,2,1].
 *
 *
 * Example 2:
 *
 *
 * Input: nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
 * Output: 5
 * Explanation: The repeated subarray with maximum length is [0,0,0,0,0].
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums1.length, nums2.length <= 1000
 * 0 <= nums1[i], nums2[i] <= 100
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  const dp = Array(nums1.length + 1)
    .fill([])
    .map(() => Array(nums2.length + 1).fill(0))

  // [i][j] => 結尾在 nums1[i-1], nums[j-1] 的共同子序列的最大長度

  let maxLengthSoFar = 0

  for (let i = 1; i <= nums1.length; i++) {
    for (let j = 1; j <= nums2.length; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        // ⬇️⬇️⬇️ 重要！！
        dp[i][j] = dp[i - 1][j - 1] + 1

        maxLengthSoFar = Math.max(dp[i][j], maxLengthSoFar)
      }
    }
  }

  return maxLengthSoFar
}
// @lc code=end
