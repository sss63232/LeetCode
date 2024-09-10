/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 *
 * https://leetcode.com/problems/jump-game/description/
 *
 * algorithms
 * Medium (38.57%)
 * Likes:    19536
 * Dislikes: 1260
 * Total Accepted:    2.1M
 * Total Submissions: 5.4M
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * You are given an integer array nums. You are initially positioned at the
 * array's first index, and each element in the array represents your maximum
 * jump length at that position.
 *
 * Return true if you can reach the last index, or false otherwise.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [2,3,1,1,4]
 * Output: true
 * Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last
 * index.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [3,2,1,0,4]
 * Output: false
 * Explanation: You will always arrive at index 3 no matter what. Its maximum
 * jump length is 0, which makes it impossible to reach the last index.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10^4
 * 0 <= nums[i] <= 10^5
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length === 1) return true

  let maxJumpableIdxSoFar = 0 + nums[0]
  for (let i = 0; i <= maxJumpableIdxSoFar; i++) {
    const jumpableIdxFromCurrent = i + nums[i]
    maxJumpableIdxSoFar = Math.max(maxJumpableIdxSoFar, jumpableIdxFromCurrent)
    
    if (maxJumpableIdxSoFar >= nums.length - 1) return true
  }

  return false
}
// @lc code=end
