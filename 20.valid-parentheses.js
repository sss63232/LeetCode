/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s === '') {
    return true
  }

  const leftBrackets = ['(', '{', '[']
  const rightBrackets = [')', '}', ']']

  const _isMatched = (a, b) =>
    leftBrackets.indexOf(a) === rightBrackets.indexOf(b)

  const foundLeftBrackets = []
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (leftBrackets.indexOf(char) >= 0) {
      foundLeftBrackets.push(char)
      continue
    }

    if (rightBrackets.indexOf(char) >= 0) {
      if (!_isMatched(foundLeftBrackets.pop(), char)) {
        return false
      }
    }
  }

  return foundLeftBrackets.length === 0
}
// @lc code=end
