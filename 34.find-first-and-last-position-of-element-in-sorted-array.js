/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 *
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * algorithms
 * Medium (38.12%)
 * Likes:    6305
 * Dislikes: 216
 * Total Accepted:    762.4K
 * Total Submissions: 2M
 * Testcase Example:  '[5,7,7,8,8,10]\n8'
 *
 * Given an array of integers nums sorted in ascending order, find the starting
 * and ending position of a given target value.
 *
 * If target is not found in the array, return [-1, -1].
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 *
 * Example 1:
 * Input: nums = [5,7,7,8,8,10], target = 8
 * Output: [3,4]
 * Example 2:
 * Input: nums = [5,7,7,8,8,10], target = 6
 * Output: [-1,-1]
 * Example 3:
 * Input: nums = [], target = 0
 * Output: [-1,-1]
 *
 *
 * Constraints:
 *
 *
 * 0 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 * nums is a non-decreasing array.
 * -10^9 <= target <= 10^9
 *
 *
 */

// @lc code=start
/**
 * 二分法
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
  const _findFirstTarget = () => {
    let left = 0
    let right = nums.length - 1
    while (left + 1 < right) {
      const mid = left + Math.floor((right - left) / 2)
      const midNum = nums[mid]

      if (target === midNum) {
        right = mid
      } else if (target > midNum) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }

    if (nums[left] === target) return left
    if (nums[right] === target) return right
    return -1
  }

  const _findLastTarget = () => {
    let left = 0
    let right = nums.length - 1
    while (left + 1 < right) {
      const mid = left + Math.floor((right - left) / 2)
      const midNum = nums[mid]

      if (target === midNum) {
        left = mid
      } else if (target > midNum) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }

    if (nums[right] === target) return right
    if (nums[left] === target) return left
    return -1
  }

  const firstTargetIdx = _findFirstTarget()
  return firstTargetIdx === -1
    ? [-1, -1]
    : [firstTargetIdx, _findLastTarget()]
}
// @lc code=end
