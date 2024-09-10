/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 *
 * https://leetcode.com/problems/merge-intervals/description/
 *
 * algorithms
 * Medium (47.56%)
 * Likes:    22353
 * Dislikes: 789
 * Total Accepted:    2.6M
 * Total Submissions: 5.4M
 * Testcase Example:  '[[1,3],[2,6],[8,10],[15,18]]'
 *
 * Given an array of intervals where intervals[i] = [starti, endi], merge all
 * overlapping intervals, and return an array of the non-overlapping intervals
 * that cover all the intervals in the input.
 *
 *
 * Example 1:
 *
 *
 * Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlap, merge them into
 * [1,6].
 *
 *
 * Example 2:
 *
 *
 * Input: intervals = [[1,4],[4,5]]
 * Output: [[1,5]]
 * Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= intervals.length <= 10^4
 * intervals[i].length == 2
 * 0 <= starti <= endi <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length <= 1) return intervals

  intervals.sort((a, b) => a[0] - b[0])

  const result = []
  // // solution1:
  //   let [left, right] = intervals[0]
  //   for (let i = 1; i < intervals.length; i++) {
  //     const cur = intervals[i]
  //     const isOverlapping = cur[0] <= right
  //     if (isOverlapping) {
  //       right = Math.max(right, cur[1])
  //     } else {
  //       result.push([left, right])
  //       left = cur[0]
  //       right = cur[1]
  //     }
  //   }
  //   result.push([left, right])

  // solution2:
  result.push(intervals[0])
  for (let i = 1; i < intervals.length; i++) {
    const cur = intervals[i]
    const rightMostResultInterval = result[result.length - 1]
    const isOverlapping = cur[0] <= rightMostResultInterval[1]
    if (isOverlapping) {
      rightMostResultInterval[1] = Math.max(rightMostResultInterval[1], cur[1])
    } else {
      result.push(cur)
    }
  }

  return result
}
// @lc code=end
