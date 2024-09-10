/*
 * @lc app=leetcode id=474 lang=javascript
 *
 * [474] Ones and Zeroes
 *
 * https://leetcode.com/problems/ones-and-zeroes/description/
 *
 * algorithms
 * Medium (47.70%)
 * Likes:    5453
 * Dislikes: 462
 * Total Accepted:    213.5K
 * Total Submissions: 445.5K
 * Testcase Example:  '["10","0001","111001","1","0"]\n5\n3'
 *
 * You are given an array of binary strings strs and two integers m and n.
 *
 * Return the size of the largest subset of strs such that there are at most m
 * 0's and n 1's in the subset.
 *
 * A set x is a subset of a set y if all elements of x are also elements of
 * y.
 *
 *
 * Example 1:
 *
 *
 * Input: strs = ["10","0001","111001","1","0"], m = 5, n = 3
 * Output: 4
 * Explanation: The largest subset with at most 5 0's and 3 1's is {"10",
 * "0001", "1", "0"}, so the answer is 4.
 * Other valid but smaller subsets include {"0001", "1"} and {"10", "1", "0"}.
 * {"111001"} is an invalid subset because it contains 4 1's, greater than the
 * maximum of 3.
 *
 *
 * Example 2:
 *
 *
 * Input: strs = ["10","0","1"], m = 1, n = 1
 * Output: 2
 * Explanation: The largest subset is {"0", "1"}, so the answer is 2.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= strs.length <= 600
 * 1 <= strs[i].length <= 100
 * strs[i] consists only of digits '0' and '1'.
 * 1 <= m, n <= 100
 *
 *
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const findMaxForm = (strs, m, n) => {
  // 二維解法
  //   const dp = new Array(m + 1).fill([]).map(() => new Array(n + 1).fill(0))
  //   for (let str of strs) {
  //     let numOfZeros = 0
  //     let numOfOnes = 0
  //     for (let c of str) {
  //       if (c === "0") {
  //         numOfZeros++
  //       } else {
  //         numOfOnes++
  //       }
  //     }
  //     for (let i = m; i >= numOfZeros; i--) {
  //       for (let j = n; j >= numOfOnes; j--) {
  //         dp[i][j] = Math.max(dp[i][j], dp[i - numOfZeros][j - numOfOnes] + 1)
  //       }
  //     }
  //   }
  //   return dp[m][n]

  // 三維解法
  const dp = Array(strs.length + 1)
    .fill([])
    .map(() =>
      Array(m + 1)
        .fill([])
        .map(() => Array(n + 1).fill(0))
    )

  for (let i = 1; i <= strs.length; i++) {
    const str = strs[i - 1]
    const numOf0 = str.split("").filter((char) => char === "0").length
    const numOf1 = str.length - numOf0
    for (let j = 0; j <= m; j++) {
      for (let k = 0; k <= n; k++) {
        if (j >= numOf0 && k >= numOf1) {
          dp[i][j][k] = Math.max(
            dp[i - 1][j][k],
            dp[i - 1][j - numOf0][k - numOf1] + 1
          )
        } else {
          dp[i][j][k] = dp[i - 1][j][k]
        }
      }
    }
  }

  return dp[strs.length][m][n]
}
// @lc code=end
