/*
 * @lc app=leetcode id=473 lang=javascript
 *
 * [473] Matchsticks to Square
 *
 * https://leetcode.com/problems/matchsticks-to-square/description/
 *
 * algorithms
 * Medium (38.22%)
 * Likes:    807
 * Dislikes: 66
 * Total Accepted:    44.9K
 * Total Submissions: 116.6K
 * Testcase Example:  '[1,1,2,2,2]'
 *
 * You are given an integer array matchsticks where matchsticks[i] is the
 * length of the i^th matchstick. You want to use all the matchsticks to make
 * one square. You should not break any stick, but you can link them up, and
 * each matchstick must be used exactly one time.
 *
 * Return true if you can make this square and false otherwise.
 *
 *
 * Example 1:
 *
 *
 * Input: matchsticks = [1,1,2,2,2]
 * Output: true
 * Explanation: You can form a square with length 2, one side of the square
 * came two sticks with length 1.
 *
 *
 * Example 2:
 *
 *
 * Input: matchsticks = [3,3,3,3,4]
 * Output: false
 * Explanation: You cannot find a way to form a square with all the
 * matchsticks.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= matchsticks.length <= 15
 * 0 <= matchsticks[i] <= 10^9
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const makesquare = function (nums) {
  const sum = nums.reduce((acc, cur) => acc + cur)
  if (sum % 4 !== 0) return false
  const sumOfSubset = sum / 4
  nums.sort((a, b) => b - a)
  if (nums[0] > sumOfSubset) return false

  const pools = new Array(4).fill(0)
  const memo = new Map()
  const _check = (numIdx) => {
    if (numIdx === nums.length) return true
    if (pools.filter(poolSum => poolSum === sumOfSubset).length === 3) return true

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
