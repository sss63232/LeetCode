/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 *
 * https://leetcode.com/problems/3sum/description/
 *
 * algorithms
 * Medium (34.76%)
 * Likes:    30987
 * Dislikes: 2884
 * Total Accepted:    3.8M
 * Total Submissions: 10.7M
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
 *
 *
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 * Explanation:
 * nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
 * nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
 * nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
 * The distinct triplets are [-1,0,1] and [-1,-1,2].
 * Notice that the order of the output and the order of the triplets does not
 * matter.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [0,1,1]
 * Output: []
 * Explanation: The only possible triplet does not sum up to 0.
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [0,0,0]
 * Output: [[0,0,0]]
 * Explanation: The only possible triplet sums up to 0.
 *
 *
 *
 * Constraints:
 *
 *
 * 3 <= nums.length <= 3000
 * -10^5 <= nums[i] <= 10^5
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  //   const _getTwoSumFromSorted = (sortedNumberList, sumTarget) => {
  //     const twoSumOptions = []
  //     let leftIdx = 0
  //     let rightIdx = sortedNumberList.length - 1
  //     while (leftIdx < rightIdx) {
  //       const leftVal = sortedNumberList[leftIdx]
  //       const rightVal = sortedNumberList[rightIdx]
  //       const sum = leftVal + rightVal
  //       if (sum > sumTarget) {
  //         rightIdx--
  //       } else if (sum < sumTarget) {
  //         leftIdx++
  //       } else {
  //         twoSumOptions.push([leftVal, rightVal])
  //         rightIdx--
  //         leftIdx++
  //       }
  //     }
  //     return twoSumOptions
  //   }
  //   nums.sort((a, b) => a - b)
  //   const outputSet = new Set()
  //   const output = []
  //   nums.forEach((num, idx) => {
  //     const pairedTarget = 0 - num
  //     const twoSumList = _getTwoSumFromSorted(nums.slice(idx + 1), pairedTarget)
  //     twoSumList.forEach((twoSumNumbers) => {
  //       const key = twoSumNumbers.join("_")
  //       if (!outputSet.has(key)) {
  //         output.push([num, ...twoSumNumbers])
  //         outputSet.add(key)
  //       }
  //     })
  //   })
  //   return output
  // ==================
  // // Answer 2
  if (!nums || nums.length < 3) {
    return
  }

  nums.sort((a, b) => a - b)
  const output = []
  const outputSet = new Set()

  // i, j, k
  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1
    let k = nums.length - 1
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k]
      if (sum === 0) {
        const sumKey = [i, j, k].map((idx) => nums[idx]).join("_")
        if (!outputSet.has(sumKey)) {
          output.push([nums[i], nums[j], nums[k]])
          outputSet.add(sumKey)
        }
        j++
        k--
      } else if (sum > 0) {
        k--
      } else {
        j++
      }
    }
  }

  return output
}
// @lc code=end
