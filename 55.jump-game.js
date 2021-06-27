/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 *
 * https://leetcode.com/problems/jump-game/description/
 *
 * algorithms
 * Medium (35.61%)
 * Likes:    6794
 * Dislikes: 437
 * Total Accepted:    660.5K
 * Total Submissions: 1.9M
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * Given an array of non-negative integers nums, you are initially positioned
 * at the first index of the array.
 *
 * Each element in the array represents your maximum jump length at that
 * position.
 *
 * Determine if you are able to reach the last index.
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
const canJump = function (nums) {
  const canJumpTo = [true]

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (!canJumpTo[j]) continue

      if (nums[j] + j >= i) {
        canJumpTo[i] = true
        break
      }
    }

    canJumpTo[i] = canJumpTo[i] || false
  }

  return canJumpTo[nums.length - 1]
}
// @lc code=end
