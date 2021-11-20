/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 *
 * https://leetcode.com/problems/kth-largest-element-in-an-array/description/
 *
 * algorithms
 * Medium (59.76%)
 * Likes:    7314
 * Dislikes: 418
 * Total Accepted:    1.1M
 * Total Submissions: 1.8M
 * Testcase Example:  '[3,2,1,5,6,4]\n2'
 *
 * Given an integer array nums and an integer k, return the k^th largest
 * element in the array.
 *
 * Note that it is the k^th largest element in the sorted order, not the k^th
 * distinct element.
 *
 *
 * Example 1:
 * Input: nums = [3,2,1,5,6,4], k = 2
 * Output: 5
 * Example 2:
 * Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
 * Output: 4
 *
 *
 * Constraints:
 *
 *
 * 1 <= k <= nums.length <= 10^4
 * -10^4 <= nums[i] <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const _swap = (idx1, idx2) => {
    const temp = nums[idx1]
    nums[idx1] = nums[idx2]
    nums[idx2] = temp
  }

  const _partition = (startIdx, endIdx) => {
    const pivot = nums[endIdx]

    let lesserTailIdx = startIdx
    for (let i = startIdx; i < endIdx; i++) {
      if (nums[i] < pivot) {
        _swap(i, lesserTailIdx)
        lesserTailIdx++
      }
    }

    _swap(lesserTailIdx, endIdx)

    return lesserTailIdx
  }

  let left = 0
  let right = nums.length - 1
  const targetIdx = nums.length - k

  while (left < right) {
    const idx = _partition(left, right)
    if (idx === targetIdx) {
      return nums[idx]
    }

    if (targetIdx > idx) {
      left = idx + 1
    } else {
      right = idx - 1
    }
  }

  if (left === targetIdx) {
    return nums[left]
  }
}
// @lc code=end
