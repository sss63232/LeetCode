/*
 * @lc app=leetcode id=139 lang=javascript
 *
 * [139] Word Break
 *
 * https://leetcode.com/problems/word-break/description/
 *
 * algorithms
 * Medium (46.93%)
 * Likes:    17309
 * Dislikes: 803
 * Total Accepted:    1.8M
 * Total Submissions: 3.8M
 * Testcase Example:  '"leetcode"\n["leet","code"]'
 *
 * Given a string s and a dictionary of strings wordDict, return true if s can
 * be segmented into a space-separated sequence of one or more dictionary
 * words.
 *
 * Note that the same word in the dictionary may be reused multiple times in
 * the segmentation.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "leetcode", wordDict = ["leet","code"]
 * Output: true
 * Explanation: Return true because "leetcode" can be segmented as "leet
 * code".
 *
 *
 * Example 2:
 *
 *
 * Input: s = "applepenapple", wordDict = ["apple","pen"]
 * Output: true
 * Explanation: Return true because "applepenapple" can be segmented as "apple
 * pen apple".
 * Note that you are allowed to reuse a dictionary word.
 *
 *
 * Example 3:
 *
 *
 * Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 300
 * 1 <= wordDict.length <= 1000
 * 1 <= wordDict[i].length <= 20
 * s and wordDict[i] consist of only lowercase English letters.
 * All the strings of wordDict are unique.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  // 初始化 dp 數組，長度為 s.length + 1，dp [i] 表示 s 的前 i 個字符是否可以被切分。
  const dp = new Array(s.length + 1).fill(false)
  dp[0] = true // Empty string is always valid

  for (let i = 1; i <= s.length; i++) {
    for (let word of wordDict) {
      if (i - word.length < 0) continue
      if (!dp[i - word.length]) continue
      if (s.slice(i - word.length, i) === word) {
        dp[i] = true
        break
      }
    }
  }

  return dp[s.length]
}

// @lc code=end
