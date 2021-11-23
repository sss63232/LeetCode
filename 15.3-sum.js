/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 *
 * https://leetcode.com/problems/3sum/description/
 *
 * algorithms
 * Medium (28.73%)
 * Likes:    11960
 * Dislikes: 1170
 * Total Accepted:    1.4M
 * Total Submissions: 4.8M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * Given an integer array nums, return all the triplets [nums[i], nums[j],
 * nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] +
 * nums[k] == 0.
 *
 * Notice that the solution set must not contain duplicate triplets.
 *
 *
 * Example 1:
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 * Example 2:
 * Input: nums = []
 * Output: []
 * Example 3:
 * Input: nums = [0]
 * Output: []
 *
 *
 * Constraints:
 *
 *
 * 0 <= nums.length <= 3000
 * -10^5 <= nums[i] <= 10^5
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 *
 * 2 pointers
 */
const threeSum = function (nums) {
  if (nums.length < 3) return []

  nums.sort((a, b) => a - b)

  const _get2sumPairs = (numbers, target) => {
    const pairs = []

    let left = 0
    let right = numbers.length - 1
    while (left < right) {
      const leftNum = numbers[left]
      if (leftNum === numbers[left - 1]) {
        left++
        continue
      }

      const rightNum = numbers[right]
      if (rightNum === numbers[right + 1]) {
        right--
        continue
      }

      const sum = leftNum + rightNum
      if (sum === target) {
        pairs.push([leftNum, rightNum])
        left++
        right--
      } else if (sum > target) {
        right--
      } else {
        left++
      }
    }

    return pairs
  }

  const resultOf3Sum = []
  for (let i = 0; i < nums.length - 2; i++) {
    const num = nums[i]
    if (num > 0) break
    if (num === nums[i - 1]) continue

    resultOf3Sum.push(
      ..._get2sumPairs(nums.slice(i + 1), -num).map(pair => [num, ...pair])
    )
  }

  return resultOf3Sum
}
// @lc code=end
