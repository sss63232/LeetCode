/*
 * @lc app=leetcode id=905 lang=javascript
 *
 * [905] Sort Array By Parity
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  if (A.length < 2) {
    return A
  }
  return A.reduce(
    (acc, cur) => {
      cur % 2 === 0
        ? acc.unshift(cur)
        : acc.push(cur)

      return acc
    },
    []
  )
}
// @lc code=end
