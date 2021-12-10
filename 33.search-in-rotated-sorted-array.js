/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 *
 * https://leetcode.com/problems/search-in-rotated-sorted-array/description/
 *
 * algorithms
 * Medium (35.90%)
 * Likes:    7391
 * Dislikes: 649
 * Total Accepted:    964.5K
 * Total Submissions: 2.7M
 * Testcase Example:  '[4,5,6,7,0,1,2]\n0'
 *
 * There is an integer array nums sorted in ascending order (with distinct
 * values).
 *
 * Prior to being passed to your function, nums is rotated at an unknown pivot
 * index k (0 <= k < nums.length) such that the resulting array is [nums[k],
 * nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
 * For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become
 * [4,5,6,7,0,1,2].
 *
 * Given the array nums after the rotation and an integer target, return the
 * index of target if it is in nums, or -1 if it is not in nums.
 *
 *
 * Example 1:
 * Input: nums = [4,5,6,7,0,1,2], target = 0
 * Output: 4
 * Example 2:
 * Input: nums = [4,5,6,7,0,1,2], target = 3
 * Output: -1
 * Example 3:
 * Input: nums = [1], target = 0
 * Output: -1
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 5000
 * -10^4 <= nums[i] <= 10^4
 * All values of nums are unique.
 * nums is guaranteed to be rotated at some pivot.
 * -10^4 <= target <= 10^4
 *
 *
 *
 * Follow up: Can you achieve this in O(log n) time complexity?
 */

// @lc code=start
/**
 * 二分法
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  const _findMinNumIdx = numbers => {
    let left = 0
    let right = nums.length - 1
    while (left + 1 < right) {
      const mid = left + Math.floor((right - left) / 2)
      numbers[mid] > numbers[right] ? (left = mid + 1) : (right = mid)
    }

    return numbers[left] > numbers[right] ? right : left
  }

  const _binarySearch = sorted => {
    let left = 0
    let right = sorted.length - 1

    while (left + 1 < right) {
      const midIdx = left + Math.floor((right - left) / 2)
      const midNum = sorted[midIdx]

      if (midNum === target) return midIdx

      target > midNum ? (left = midIdx + 1) : (right = midIdx - 1)
    }

    if (sorted[left] === target) return left
    if (sorted[right] === target) return right
    return -1
  }

  const minNumIdx = _findMinNumIdx(nums)

  if (target > nums[nums.length - 1]) {
    return _binarySearch(nums.slice(0, minNumIdx))
  }

  const targetIdx = _binarySearch(nums.slice(minNumIdx))
  return targetIdx === -1 ? -1 : minNumIdx + targetIdx
}
// @lc code=end
