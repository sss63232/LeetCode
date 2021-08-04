/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 *
 * https://leetcode.com/problems/permutations/description/
 *
 * algorithms
 * Medium (68.01%)
 * Likes:    7000
 * Dislikes: 140
 * Total Accepted:    880.3K
 * Total Submissions: 1.3M
 * Testcase Example:  '[1,2,3]'
 *
 * Given an array nums of distinct integers, return all the possible
 * permutations. You can return the answer in any order.
 *
 *
 * Example 1:
 * Input: nums = [1,2,3]
 * Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * Example 2:
 * Input: nums = [0,1]
 * Output: [[0,1],[1,0]]
 * Example 3:
 * Input: nums = [1]
 * Output: [[1]]
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 6
 * -10 <= nums[i] <= 10
 * All the integers of nums are unique.
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
  const n = nums.length
  if (n === 1) return [[nums[0]]]

  const results = []
  const _dfs = (path, selectedIdxSet) => {
    if (path.length === n) {
      results.push(path)
      return
    }

    for (let i = 0; i < n; i++) {
      if (selectedIdxSet.has(i)) continue

      _dfs([...path, nums[i]], new Set(selectedIdxSet).add(i))
    }
  }

  _dfs([], new Set())
  return results
}
// @lc code=end
