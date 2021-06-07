/*
 * @lc app=leetcode id=698 lang=javascript
 *
 * [698] Partition to K Equal Sum Subsets
 *
 * https://leetcode.com/problems/partition-to-k-equal-sum-subsets/description/
 *
 * algorithms
 * Medium (45.68%)
 * Likes:    2924
 * Dislikes: 196
 * Total Accepted:    126.4K
 * Total Submissions: 281.5K
 * Testcase Example:  '[4,3,2,3,5,2,1]\n4'
 *
 * Given an integer array nums and an integer k, return true if it is possible
 * to divide this array into k non-empty subsets whose sums are all equal.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [4,3,2,3,5,2,1], k = 4
 * Output: true
 * Explanation: It's possible to divide it into 4 subsets (5), (1, 4), (2,3),
 * (2,3) with equal sums.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,2,3,4], k = 3
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= k <= nums.length <= 16
 * 1 <= nums[i] <= 10^4
 * The frequency of each element is in the range [1, 4].
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const canPartitionKSubsets = function (nums, k) {
  const sumOfNums = nums.reduce((acc, cur) => acc + cur)
  if (sumOfNums % k !== 0) return false
  const sumOfSubset = sumOfNums / k

  nums.sort((a, b) => b - a)
  if (nums[0] > sumOfSubset) return false

  const buckets = new Array(k).fill(0)
  const _equalToSubsetSum = sum => sum === sumOfSubset

  const _check = (numIdx) => {
    if (numIdx === nums.length) return true
    if (buckets.filter(_equalToSubsetSum).length === k - 1) return true

    const curNum = nums[numIdx]
    for (let i = 0; i < buckets.length; i++) {
      if (
        _equalToSubsetSum(buckets[i]) ||
        buckets[i] + curNum > sumOfSubset
      ) continue

      buckets[i] += curNum
      if (_check(numIdx + 1)) return true

      buckets[i] -= curNum
    }

    return false
  }

  return _check(0)
}
// @lc code=end
