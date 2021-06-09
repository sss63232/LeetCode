/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 *
 * https://leetcode.com/problems/combinations/description/
 *
 * algorithms
 * Medium (57.49%)
 * Likes:    2334
 * Dislikes: 85
 * Total Accepted:    370.9K
 * Total Submissions: 632.5K
 * Testcase Example:  '4\n2'
 *
 * Given two integers n and k, return all possible combinations of k numbers
 * out of the range [1, n].
 *
 * You may return the answer in any order.
 *
 *
 * Example 1:
 *
 *
 * Input: n = 4, k = 2
 * Output:
 * [
 * ⁠ [2,4],
 * ⁠ [3,4],
 * ⁠ [2,3],
 * ⁠ [1,2],
 * ⁠ [1,3],
 * ⁠ [1,4],
 * ]
 *
 *
 * Example 2:
 *
 *
 * Input: n = 1, k = 1
 * Output: [[1]]
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= n <= 20
 * 1 <= k <= n
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function (n, k) {
  const results = []
  const _dfs = (numIdx, path) => {
    if (path.length === k) {
      results.push([...path])
      return
    }

    for (let i = numIdx; i <= n; i++) {
      if (k - path.length <= n - i + 1) {
        path.push(i)
        _dfs(i + 1, path)
        path.pop()
      }
    }
  }

  _dfs(1, [])

  return results
}
// @lc code=end
