/*
 * @lc app=leetcode id=763 lang=javascript
 *
 * [763] Partition Labels
 *
 * https://leetcode.com/problems/partition-labels/description/
 *
 * algorithms
 * Medium (79.89%)
 * Likes:    10312
 * Dislikes: 401
 * Total Accepted:    556.3K
 * Total Submissions: 695.5K
 * Testcase Example:  '"ababcbacadefegdehijhklij"'
 *
 * You are given a string s. We want to partition the string into as many parts
 * as possible so that each letter appears in at most one part.
 *
 * Note that the partition is done so that after concatenating all the parts in
 * order, the resultant string should be s.
 *
 * Return a list of integers representing the size of these parts.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "ababcbacadefegdehijhklij"
 * Output: [9,7,8]
 * Explanation:
 * The partition is "ababcbaca", "defegde", "hijhklij".
 * This is a partition so that each letter appears in at most one part.
 * A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it
 * splits s into less parts.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "eccbbbbdec"
 * Output: [10]
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 500
 * s consists of lowercase English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  if (s.length <= 1) return [s.length]

  const result = []

  let partSizeSoFar = 0
  let partEndIdx = 0
  for (let i = 0; i < s.length; i++) {
    partSizeSoFar++
    const char = s[i]
    const rightMostCharIdx = s.lastIndexOf(char)
    partEndIdx = Math.max(partEndIdx, rightMostCharIdx)

    if (i === partEndIdx) {
      result.push(partSizeSoFar)
      partSizeSoFar = 0
      partEndIdx = 0
    }
  }

  return result
}
// @lc code=end
