/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 *
 * https://leetcode.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (58.60%)
 * Likes:    2520
 * Dislikes: 162
 * Total Accepted:    799.4K
 * Total Submissions: 1.4M
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * Given two strings s and t, return true if t is an anagram of s, and false
 * otherwise.
 *
 *
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: false
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length, t.length <= 5 * 10^4
 * s and t consist of lowercase English letters.
 *
 *
 *
 * Follow up: What if the inputs contain Unicode characters? How would you
 * adapt your solution to such a case?
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false
  }

  const dict = s.split('').reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1
    acc[cur] = 1 + (acc[cur] ? acc[cur] : 0)
    return acc
  }, {})

  for (let i = 0; i < t.length; i++) {
    if (!dict[t[i]]) {
      return false
    }

    dict[t[i]]--
  }

  return true
}
// @lc code=end
