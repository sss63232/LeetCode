/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 *
 * https://leetcode.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (44.61%)
 * Likes:    12132
 * Dislikes: 423
 * Total Accepted:    2.2M
 * Total Submissions: 4.9M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * Given an array of integers, return indices of the two numbers such that they
 * add up to a specific target.
 *
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 *
 * Example:
 *
 *
 * Given nums = [2, 7, 11, 15], target = 9,
 *
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numsMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    const complimentValue = target - nums[i]
    if (numsMap.has(complimentValue)) {
      return [numsMap.get(complimentValue), i]
    }
    numsMap.set(nums[i], i)
  }
}
// @lc code=end
