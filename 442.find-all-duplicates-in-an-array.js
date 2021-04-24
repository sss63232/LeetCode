/*
 * @lc app=leetcode id=442 lang=javascript
 *
 * [442] Find All Duplicates in an Array
 *
 * https://leetcode.com/problems/find-all-duplicates-in-an-array/description/
 *
 * algorithms
 * Medium (68.93%)
 * Likes:    3480
 * Dislikes: 182
 * Total Accepted:    266.7K
 * Total Submissions: 385.7K
 * Testcase Example:  '[4,3,2,7,8,2,3,1]'
 *
 * Given an integer array nums of length n where all the integers of nums are
 * in the range [1, n] and each integer appears once or twice, return an array
 * of all the integers that appears twice.
 *
 *
 * Example 1:
 * Input: nums = [4,3,2,7,8,2,3,1]
 * Output: [2,3]
 * Example 2:
 * Input: nums = [1,1,2]
 * Output: [1]
 * Example 3:
 * Input: nums = [1]
 * Output: []
 *
 *
 * Constraints:
 *
 *
 * n == nums.length
 * 1 <= n <= 10^5
 * 1 <= nums[i] <= n
 * Each element in nums appears once or twice.
 *
 *
 *
 * Follow up: Could you do it without extra space and in O(n) runtime?
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = function (nums) {
  const ans = []
  for (let i = 0; i < nums.length; i++) {
    const n = Math.abs(nums[i])
    if (nums[n - 1] < 0) {
      ans.push(n)
    } else {
      nums[n - 1] *= -1
    }
  }

  return ans
}
// @lc code=end
