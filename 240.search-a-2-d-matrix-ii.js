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
 * 二分法
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
  let row = matrix.length - 1
  let column = 0
  while (row >= 0 && column <= matrix[0].length - 1) {
    const pivot = matrix[row][column]
    if (pivot === target) return true
    pivot > target
      ? row--
      : column++
  }

  return false
}
