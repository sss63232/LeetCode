/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 *
 * https://leetcode.com/problems/group-anagrams/description/
 *
 * algorithms
 * Medium (59.31%)
 * Likes:    5223
 * Dislikes: 228
 * Total Accepted:    895.7K
 * Total Submissions: 1.5M
 * Testcase Example:  '["eat","tea","tan","ate","nat","bat"]'
 *
 * Given an array of strings strs, group the anagrams together. You can return
 * the answer in any order.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a
 * different word or phrase, typically using all the original letters exactly
 * once.
 *
 *
 * Example 1:
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * Example 2:
 * Input: strs = [""]
 * Output: [[""]]
 * Example 3:
 * Input: strs = ["a"]
 * Output: [["a"]]
 *
 *
 * Constraints:
 *
 *
 * 1 <= strs.length <= 10^4
 * 0 <= strs[i].length <= 100
 * strs[i] consists of lower-case English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
  return Object.values(strs.map(str => str.split('').sort().join('')).reduce((acc, cur, idx) => {
    if (acc[cur]) {
      acc[cur].push(strs[idx])
    } else {
      acc[cur] = [strs[idx]]
    }
    return acc
  }, {}))
}
// @lc code=end
