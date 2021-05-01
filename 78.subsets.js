/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 *
 * https://leetcode.com/problems/subsets/description/
 *
 * algorithms
 * Medium (65.12%)
 * Likes:    5660
 * Dislikes: 112
 * Total Accepted:    758.1K
 * Total Submissions: 1.2M
 * Testcase Example:  '[1,2,3]'
 *
 * Given an integer array nums of unique elements, return all possible subsets
 * (the power set).
 *
 * The solution set must not contain duplicate subsets. Return the solution in
 * any order.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,2,3]
 * Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [0]
 * Output: [[],[0]]
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10
 * -10 <= nums[i] <= 10
 * All the numbers of nums are unique.
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function (nums) {
  const numsLength = nums.length
  const ans = []
  for (let i = 0; i < (1 << numsLength); i++) {
    ans[i] = []
    for (let j = 0; j < numsLength; j++) {
      if (i & (1 << j)) {
        ans[i].push(nums[j])
      }
    }
  }

  return ans
}
// @lc code=end
