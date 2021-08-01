/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 *
 * https://leetcode.com/problems/sort-colors/description/
 *
 * algorithms
 * Medium (50.67%)
 * Likes:    6217
 * Dislikes: 332
 * Total Accepted:    733.2K
 * Total Submissions: 1.4M
 * Testcase Example:  '[2,0,2,1,1,0]'
 *
 * Given an array nums with n objects colored red, white, or blue, sort them
 * in-place so that objects of the same color are adjacent, with the colors in
 * the order red, white, and blue.
 *
 * We will use the integers 0, 1, and 2 to represent the color red, white, and
 * blue, respectively.
 *
 * You must solve this problem without using the library's sort function.
 *
 *
 * Example 1:
 * Input: nums = [2,0,2,1,1,0]
 * Output: [0,0,1,1,2,2]
 * Example 2:
 * Input: nums = [2,0,1]
 * Output: [0,1,2]
 * Example 3:
 * Input: nums = [0]
 * Output: [0]
 * Example 4:
 * Input: nums = [1]
 * Output: [1]
 *
 *
 * Constraints:
 *
 *
 * n == nums.length
 * 1 <= n <= 300
 * nums[i] is 0, 1, or 2.
 *
 *
 *
 * Follow up: Could you come up with a one-pass algorithm using only constant
 * extra space?
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 *
 * two pointers
 * partition
 */
const sortColors = function (nums) {
  const _swap = (arr, idx1, idx2) => {
    const tmp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = tmp
  }

  let zeroTailIdx = 0
  let twoHeadIdx = nums.length - 1
  let i = 0
  while (i <= twoHeadIdx) {
    const num = nums[i]

    if (num === 0) {
      _swap(nums, zeroTailIdx, i)
      zeroTailIdx++
      i++
      continue
    }

    if (num === 2) {
      _swap(nums, twoHeadIdx, i)
      twoHeadIdx--
      continue
    }

    i++
  }

  return nums
}
// @lc code=end
