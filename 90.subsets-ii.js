/*
 * @lc app=leetcode id=90 lang=javascript
 *
 * [90] Subsets II
 *
 * https://leetcode.com/problems/subsets-ii/description/
 *
 * algorithms
 * Medium (49.62%)
 * Likes:    2667
 * Dislikes: 112
 * Total Accepted:    350.1K
 * Total Submissions: 705.6K
 * Testcase Example:  '[1,2,2]'
 *
 * Given an integer array nums that may contain duplicates, return all possible
 * subsets (the power set).
 *
 * The solution set must not contain duplicate subsets. Return the solution in
 * any order.
 *
 *
 * Example 1:
 * Input: nums = [1,2,2]
 * Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
 * Example 2:
 * Input: nums = [0]
 * Output: [[],[0]]
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10
 * -10 <= nums[i] <= 10
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b)
  const ans = []
  const selected = new Set()

  const _dfs = (numIdx, path) => {
    const key = path.join('_')
    if (!selected.has(key)) {
      selected.add(key)
      ans.push([...path])
    }

    if (numIdx === nums.length) return

    _dfs(numIdx + 1, path)
    _dfs(numIdx + 1, [...path, nums[numIdx]])
  }

  _dfs(0, [])
  return ans
}
// @lc code=end
