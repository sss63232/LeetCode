/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 *
 * https://leetcode.com/problems/move-zeroes/description/
 *
 * algorithms
 * Easy (58.90%)
 * Likes:    6078
 * Dislikes: 177
 * Total Accepted:    1.2M
 * Total Submissions: 2M
 * Testcase Example:  '[0,1,0,3,12]'
 *
 * Given an integer array nums, move all 0's to the end of it while maintaining
 * the relative order of the non-zero elements.
 *
 * Note that you must do this in-place without making a copy of the array.
 *
 *
 * Example 1:
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 * Example 2:
 * Input: nums = [0]
 * Output: [0]
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10^4
 * -2^31 <= nums[i] <= 2^31 - 1
 *
 *
 *
 * Follow up: Could you minimize the total number of operations done?
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 *
 * two pointers
 */
const moveZeroes = function (nums) {
  const _swap = (arr, idx1, idx2) => {
    const tmp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = tmp
  }

  let nonZeroTailIdx = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      _swap(nums, nonZeroTailIdx, i)
      nonZeroTailIdx++
    }
  }

  // let nonZeroTailIdx = 0
  // let i = 0
  // while (i < nums.length) {
  //   if (nums[i] !== 0) {
  //     _swap(nums, nonZeroTailIdx, i)
  //     nonZeroTailIdx++
  //   }

  //   i++
  // }

  return nums
}
// @lc code=end
