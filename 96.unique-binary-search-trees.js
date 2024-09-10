/*
 * @lc app=leetcode id=96 lang=javascript
 *
 * [96] Unique Binary Search Trees
 *
 * https://leetcode.com/problems/unique-binary-search-trees/description/
 *
 * algorithms
 * Medium (61.18%)
 * Likes:    10396
 * Dislikes: 407
 * Total Accepted:    688.2K
 * Total Submissions: 1.1M
 * Testcase Example:  '3'
 *
 * Given an integer n, return the number of structurally unique BST's (binary
 * search trees) which has exactly n nodes of unique values from 1 to n.
 *
 *
 * Example 1:
 *
 *
 * Input: n = 3
 * Output: 5
 *
 *
 * Example 2:
 *
 *
 * Input: n = 1
 * Output: 1
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= n <= 19
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  if (n <= 1) return 1
  const dp = new Array(n + 1).fill(0)
  dp[0] = 1
  dp[1] = 1

  for (let walker = 2; walker <= n; walker++) {
    for (let partOfWalker = 1; partOfWalker <= walker; partOfWalker++) {
      dp[walker] += dp[partOfWalker - 1] * dp[walker - partOfWalker]
    }
  }

  return dp[n]
}
// @lc code=end
