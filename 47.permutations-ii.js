/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 *
 * https://leetcode.com/problems/permutations-ii/description/
 *
 * algorithms
 * Medium (50.55%)
 * Likes:    3433
 * Dislikes: 82
 * Total Accepted:    486.7K
 * Total Submissions: 953K
 * Testcase Example:  '[1,1,2]'
 *
 * Given a collection of numbers, nums, that might contain duplicates, return
 * all possible unique permutations in any order.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,1,2]
 * Output:
 * [[1,1,2],
 * ⁠[1,2,1],
 * ⁠[2,1,1]]
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,2,3]
 * Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 8
 * -10 <= nums[i] <= 10
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function (nums) {
  const results = []
  const _dfs = (path, selectedIdx) => {
    if (path.length === nums.length) {
      results.push(path)
      return
    }

    const selectedNum = new Set()
    for (let i = 0; i < nums.length; i++) {
      if (selectedIdx.has(i)) continue
      const num = nums[i]
      if (selectedNum.has(num)) continue

      selectedNum.add(num)
      _dfs([...path, num], new Set(selectedIdx).add(i))
    }
  }

  _dfs([], new Set())
  return results
}
// @lc code=end
