/*
 * @lc app=leetcode id=260 lang=javascript
 *
 * [260] Single Number III
 *
 * https://leetcode.com/problems/single-number-iii/description/
 *
 * algorithms
 * Medium (65.35%)
 * Likes:    2232
 * Dislikes: 132
 * Total Accepted:    188.7K
 * Total Submissions: 288.4K
 * Testcase Example:  '[1,2,1,3,2,5]'
 *
 * Given an integer array nums, in which exactly two elements appear only once
 * and all the other elements appear exactly twice. Find the two elements that
 * appear only once. You can return the answer in any order.
 *
 * Follow up: Your algorithm should run in linear runtime complexity. Could you
 * implement it using only constant space complexity?
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,2,1,3,2,5]
 * Output: [3,5]
 * Explanation:  [5, 3] is also a valid answer.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [-1,0]
 * Output: [-1,0]
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [0,1]
 * Output: [1,0]
 *
 *
 *
 * Constraints:
 *
 *
 * 2 <= nums.length <= 3 * 10^4
 * -2^31 <= nums[i] <= 2^31 - 1
 * Each integer in nums will appear twice, only two integers will appear once.
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const singleNumber = function (nums) {
  return Array.from(
    nums.reduce((acc, cur) => {
      acc[acc.has(cur) ? 'delete' : 'add'](cur)
      return acc
    }, new Set())
  )
}
// @lc code=end
