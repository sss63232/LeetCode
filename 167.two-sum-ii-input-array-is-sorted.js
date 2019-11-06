/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input array is sorted
 *
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/
 *
 * algorithms
 * Easy (51.56%)
 * Likes:    1135
 * Dislikes: 464
 * Total Accepted:    304.3K
 * Total Submissions: 588.6K
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * Given an array of integers that is already sorted in ascending order, find
 * two numbers such that they add up to a specific target number.
 *
 * The function twoSum should return indices of the two numbers such that they
 * add up to the target, where index1 must be less than index2.
 *
 * Note:
 *
 *
 * Your returned answers (both index1 and index2) are not zero-based.
 * You may assume that each input would have exactly one solution and you may
 * not use the same element twice.
 *
 *
 * Example:
 *
 *
 * Input: numbers = [2,7,11,15], target = 9
 * Output: [1,2]
 * Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
 *
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let startPointer = 0
  let endPointer = numbers.length

  while (startPointer !== endPointer) {
    const tmpSum = numbers[startPointer] + numbers[endPointer]
    if (tmpSum === target) {
      return [startPointer + 1, endPointer + 1]
    }

    if (tmpSum < target) {
      startPointer++
    } else {
      endPointer--
    }
  }

  return null
}
// @lc code=end
