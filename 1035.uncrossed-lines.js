/*
 * @lc app=leetcode id=1035 lang=javascript
 *
 * [1035] Uncrossed Lines
 *
 * https://leetcode.com/problems/uncrossed-lines/description/
 *
 * algorithms
 * Medium (63.15%)
 * Likes:    3830
 * Dislikes: 58
 * Total Accepted:    164K
 * Total Submissions: 258.4K
 * Testcase Example:  '[1,4,2]\n[1,2,4]'
 *
 * You are given two integer arrays nums1 and nums2. We write the integers of
 * nums1 and nums2 (in the order they are given) on two separate horizontal
 * lines.
 *
 * We may draw connecting lines: a straight line connecting two numbers
 * nums1[i] and nums2[j] such that:
 *
 *
 * nums1[i] == nums2[j], and
 * the line we draw does not intersect any other connecting (non-horizontal)
 * line.
 *
 *
 * Note that a connecting line cannot intersect even at the endpoints (i.e.,
 * each number can only belong to one connecting line).
 *
 * Return the maximum number of connecting lines we can draw in this way.
 *
 *
 * Example 1:
 *
 *
 * Input: nums1 = [1,4,2], nums2 = [1,2,4]
 * Output: 2
 * Explanation: We can draw 2 uncrossed lines as in the diagram.
 * We cannot draw 3 uncrossed lines, because the line from nums1[1] = 4 to
 * nums2[2] = 4 will intersect the line from nums1[2]=2 to nums2[1]=2.
 *
 *
 * Example 2:
 *
 *
 * Input: nums1 = [2,5,1,2,5], nums2 = [10,5,2,1,5,2]
 * Output: 3
 *
 *
 * Example 3:
 *
 *
 * Input: nums1 = [1,3,7,1,7,5], nums2 = [1,9,2,5,1]
 * Output: 2
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums1.length, nums2.length <= 500
 * 1 <= nums1[i], nums2[j] <= 2000
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function (nums1, nums2) {
  const dp = Array(nums1.length + 1)
    .fill([])
    .map(() => Array(nums2.length + 1).fill(0))

  let maxSoFar = 0
  for (let i = 1; i <= nums1.length; i++) {
    for (let j = 1; j <= nums2.length; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }

      maxSoFar = Math.max(maxSoFar, dp[i][j])
    }
  }

  return maxSoFar
}
// @lc code=end
