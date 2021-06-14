/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 *
 * https://leetcode.com/problems/binary-search/description/
 *
 * algorithms
 * Easy (49.81%)
 * Likes:    388
 * Dislikes: 36
 * Total Accepted:    87.1K
 * Total Submissions: 174.4K
 * Testcase Example:  '[-1,0,3,5,9,12]\n9'
 *
 * Given a sorted (in ascending order) integer array nums of n elements and a
 * target value, write a function to search target in nums. If target exists,
 * then return its index, otherwise return -1.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [-1,0,3,5,9,12], target = 9
 * Output: 4
 * Explanation: 9 exists in nums and its index is 4
 *
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [-1,0,3,5,9,12], target = 2
 * Output: -1
 * Explanation: 2 does not exist in nums so return -1
 *
 *
 *
 *
 * Note:
 *
 *
 * You may assume that all elements in nums are unique.
 * n will be in the range [1, 10000].
 * The value of each element in nums will be in the range [-9999, 9999].
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  const _searchTargetBetween = (leftIdx, rightIdx) => {
    if (leftIdx === rightIdx) return nums[leftIdx] === target ? leftIdx : -1
    // 0, 1, 2, 3, 4
    const middleIdx = Math.floor((rightIdx - leftIdx) / 2) + leftIdx
    const middleNum = nums[middleIdx]
    if (middleNum === target) return middleIdx
    if (middleNum > target) return _searchTargetBetween(leftIdx, middleIdx)
    return _searchTargetBetween(middleIdx + 1, rightIdx)
  }

  return _searchTargetBetween(0, nums.length - 1)
}
// @lc code=end
