/*
 * @lc app=leetcode id=647 lang=javascript
 *
 * [647] Palindromic Substrings
 *
 * https://leetcode.com/problems/palindromic-substrings/description/
 *
 * algorithms
 * Medium (70.29%)
 * Likes:    10839
 * Dislikes: 239
 * Total Accepted:    865.9K
 * Total Submissions: 1.2M
 * Testcase Example:  '"abc"'
 *
 * Given a string s, return the number of palindromic substrings in it.
 *
 * A string is a palindrome when it reads the same backward as forward.
 *
 * A substring is a contiguous sequence of characters within the string.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "abc"
 * Output: 3
 * Explanation: Three palindromic strings: "a", "b", "c".
 *
 *
 * Example 2:
 *
 *
 * Input: s = "aaa"
 * Output: 6
 * Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 1000
 * s consists of lowercase English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  if (s.length === 1) return 1

  //   // Solution 1: 一維數組
  //   const isPalindrom = (string) => {
  //     let left = 0
  //     let right = string.length - 1
  //     while (left < right) {
  //       if (string[left] !== string[right]) {
  //         return false
  //       }

  //       left++
  //       right--
  //     }

  //     return true
  //   }

  //   const dp = Array(s.length).fill(1)
  //   for (let i = 1; i < s.length; i++) {
  //     dp[i] = dp[i - 1]
  //     for (let j = 0; j <= i; j++) {
  //       if (isPalindrom(s.slice(j, i + 1))) {
  //         dp[i] += 1
  //       }
  //     }
  //   }

  //   return dp[s.length - 1]

  // Solution 2: 二維數組
  // dp[i][j] => 表示 從 idx_i ~ idx_j 是否是回文
  const dp = Array(s.length)
    .fill([])
    .map(() => Array(s.length).fill(false))

  let result = 0
  for(let i=0; i<s.length;i++){
      dp[i][i] = true
      result++
  }

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        if (j - i <= 1) {
          dp[i][j] = true
        } else {
          dp[i][j] = dp[i + 1][j - 1]
        }
      }

      if (dp[i][j]) {
        result++
      }
    }
  }
  console.log('TCL=> ~ countSubstrings ~ dp:', dp)

  return result
}
// @lc code=end
