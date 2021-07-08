/*
 * @lc app=leetcode id=718 lang=javascript
 *
 * [718] Maximum Length of Repeated Subarray
 *
 * https://leetcode.com/problems/maximum-length-of-repeated-subarray/description/
 *
 * algorithms
 * Medium (50.90%)
 * Likes:    2235
 * Dislikes: 56
 * Total Accepted:    100K
 * Total Submissions: 196.3K
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
 * 動態規劃
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findLength = function (nums1, nums2) {
  const dp = new Array(nums1.length).fill(0).map(() => new Array(nums2.length).fill(0))

  const firstNum1 = nums1[0]
  dp[0] = dp[0].map((_, idx) => nums2[idx] === firstNum1 ? 1 : 0)

  const firstNum2 = nums2[0]
  dp.forEach((row, idx) => {
    row[0] = nums1[idx] === firstNum2 ? 1 : 0
  })

  let ans = 0
  if (dp[0].some(length => length === 1)) {
    ans = 1
  } else if (dp.map(row => row[0]).some(length => length === 1)) {
    ans = 1
  }

  for (let i = 1; i < nums1.length; i++) {
    for (let j = 1; j < nums2.length; j++) {
      if (nums1[i] !== nums2[j]) {
        dp[i][j] = 0
      } else {
        dp[i][j] = dp[i - 1][j - 1] + 1
        ans = Math.max(ans, dp[i][j])
      }
    }
  }

  return ans
}
// @lc code=end
