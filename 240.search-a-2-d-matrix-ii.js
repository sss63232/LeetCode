/*
 * @lc app=leetcode id=240 lang=javascript
 *
 * [240] Search a 2D Matrix II
 *
 * https://leetcode.com/problems/search-a-2d-matrix-ii/description/
 *
 * algorithms
 * Medium (40.83%)
 * Likes:    1485
 * Dislikes: 42
 * Total Accepted:    179.6K
 * Total Submissions: 439.6K
 * Testcase Example:  '[[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]\n5'
 *
 * Write an efficient algorithm that searches for a value in an m x n matrix.
 * This matrix has the following properties:
 *
 *
 * Integers in each row are sorted in ascending from left to right.
 * Integers in each column are sorted in ascending from top to bottom.
 *
 *
 * Example:
 *
 * Consider the following matrix:
 *
 *
 * [
 * ⁠ [1,   4,  7, 11, 15],
 * ⁠ [2,   5,  8, 12, 19],
 * ⁠ [3,   6,  9, 16, 22],
 * ⁠ [10, 13, 14, 17, 24],
 * ⁠ [18, 21, 23, 26, 30]
 * ]
 *
 *
 * Given target = 5, return true.
 *
 * Given target = 20, return false.
 *
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  // to avoid empty matrix
  const firstRow = matrix[0]
  if (!firstRow) { return false }

  const xAxisLimit = firstRow.length - 1
  const yAxisLimit = matrix.length - 1

  let x = 0
  let y = yAxisLimit
  while (x <= xAxisLimit && y >= 0) {
    let pivot = matrix[y][x]
    if (target === pivot) { return true }
    if (target > pivot) {
      x++
      continue
    }
    if (target < pivot) {
      y--
    }
  }

  return false
}
