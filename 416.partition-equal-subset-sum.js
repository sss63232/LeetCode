/*
 * @lc app=leetcode id=416 lang=javascript
 *
 * [416] Partition Equal Subset Sum
 *
 * https://leetcode.com/problems/partition-equal-subset-sum/description/
 *
 * algorithms
 * Medium (44.86%)
 * Likes:    4523
 * Dislikes: 94
 * Total Accepted:    291.4K
 * Total Submissions: 645.4K
 * Testcase Example:  '[1,5,11,5]'
 *
 * Given a non-empty array nums containing only positive integers, find if the
 * array can be partitioned into two subsets such that the sum of elements in
 * both subsets is equal.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,5,11,5]
 * Output: true
 * Explanation: The array can be partitioned as [1, 5, 5] and [11].
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,2,3,5]
 * Output: false
 * Explanation: The array cannot be partitioned into equal sum subsets.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 200
 * 1 <= nums[i] <= 100
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canPartition = function (nums) {
  const sum = nums.reduce((acc, cur) => acc + cur)
  if (sum % 2 !== 0) return false
  const sumOfSubset = sum / 2
  nums.sort((a, b) => b - a)
  if (nums[0] > sumOfSubset) return false

  const pools = new Array(2).fill(0)
  const memo = new Map()
  const _check = (numIdx) => {
    if (numIdx === nums.length) return true

    const key = `${numIdx}_${pools.join('_')}`
    if (memo.has(key)) return memo.get(key)

    const curNum = nums[numIdx]
    for (let i = 0; i < pools.length; i++) {
      if (
        pools[i] === sumOfSubset ||
        pools[i] + curNum > sumOfSubset
      ) continue

      pools[i] += curNum
      if (_check(numIdx + 1)) {
        memo.set(key, true)
        return true
      }
      pools[i] -= curNum
    }

    memo.set(key, false)
    return false
  }

  return _check(0)
}
// @lc code=end
