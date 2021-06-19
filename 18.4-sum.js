/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 *
 * https://leetcode.com/problems/4sum/description/
 *
 * algorithms
 * Medium (35.52%)
 * Likes:    3514
 * Dislikes: 427
 * Total Accepted:    424.8K
 * Total Submissions: 1.2M
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * Given an array nums of n integers, return an array of all the unique
 * quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
 *
 *
 * 0 <= a, b, c, d < n
 * a, b, c, and d are distinct.
 * nums[a] + nums[b] + nums[c] + nums[d] == target
 *
 *
 * You may return the answer in any order.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,0,-1,0,-2,2], target = 0
 * Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [2,2,2,2,2], target = 8
 * Output: [[2,2,2,2]]
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 200
 * -10^9 <= nums[i] <= 10^9
 * -10^9 <= target <= 10^9
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function (nums, target) {
  const _get2sumNumbers = (sortedNumbers, targetOf2sum) => {
    let leftIdx = 0
    let rightIdx = sortedNumbers.length - 1

    const numbers = []
    while (leftIdx < rightIdx) {
      const leftNum = sortedNumbers[leftIdx]
      const rightNum = sortedNumbers[rightIdx]
      const sum = leftNum + rightNum

      if (sum === targetOf2sum) {
        numbers.push([leftNum, rightNum])
        rightIdx--
        leftIdx++
        while (
          leftIdx < rightIdx &&
          sortedNumbers[rightIdx] === sortedNumbers[rightIdx + 1]
        )rightIdx--
        while (
          leftIdx < rightIdx &&
          sortedNumbers[leftIdx] === sortedNumbers[leftIdx - 1]
        )leftIdx++

        continue
      }

      if (sum > targetOf2sum) {
        rightIdx--
      } else {
        leftIdx++
      }
    }

    return numbers
  }

  const _nSum = (n, sortedNumbers, sumTarget) => {
    if (n === 2) return _get2sumNumbers(sortedNumbers, sumTarget)

    const results = []
    for (let i = 0; i < sortedNumbers.length; i++) {
      const num = sortedNumbers[i]
      if (i !== 0 && num === sortedNumbers[i - 1]) continue

      const subResults = _nSum(n - 1, sortedNumbers.slice(i + 1), sumTarget - num)
      if (subResults.length) {
        results.push(...subResults.map(subResult => ([num, ...subResult])))
      }
    }
    return results
  }

  nums.sort((a, b) => a - b)

  return _nSum(4, nums, target)

  // const results = []
  // for (let i = 0; i < nums.length; i++) {
  //   if (i !== 0 && nums[i] === nums[i - 1]) continue
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (j !== i + 1 && nums[j] === nums[j - 1]) continue
  //     const subResults = _2sum(nums.slice(j + 1), target - nums[i] - nums[j])
  //     if (subResults.length) {
  //       results.push(...subResults.map(subResult => ([nums[i], nums[j], ...subResult])))
  //     }
  //   }
  // }
  // return results
}

// @lc code=end
