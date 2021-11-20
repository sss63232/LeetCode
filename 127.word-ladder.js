/*
 * @lc app=leetcode id=127 lang=javascript
 *
 * [127] Word Ladder
 *
 * https://leetcode.com/problems/word-ladder/description/
 *
 * algorithms
 * Hard (31.83%)
 * Likes:    4793
 * Dislikes: 1403
 * Total Accepted:    558.7K
 * Total Submissions: 1.7M
 * Testcase Example:  '"hit"\n"cog"\n["hot","dot","dog","lot","log","cog"]'
 *
 * A transformation sequence from word beginWord to word endWord using a
 * dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... ->
 * sk such that:
 *
 *
 * Every adjacent pair of words differs by a single letter.
 * Every si for 1 <= i <= k is in wordList. Note that beginWord does not need
 * to be in wordList.
 * sk == endWord
 *
 *
 * Given two words, beginWord and endWord, and a dictionary wordList, return
 * the number of words in the shortest transformation sequence from beginWord
 * to endWord, or 0 if no such sequence exists.
 *
 *
 * Example 1:
 *
 *
 * Input: beginWord = "hit", endWord = "cog", wordList =
 * ["hot","dot","dog","lot","log","cog"]
 * Output: 5
 * Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot"
 * -> "dog" -> cog", which is 5 words long.
 *
 *
 * Example 2:
 *
 *
 * Input: beginWord = "hit", endWord = "cog", wordList =
 * ["hot","dot","dog","lot","log"]
 * Output: 0
 * Explanation: The endWord "cog" is not in wordList, therefore there is no
 * valid transformation sequence.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= beginWord.length <= 10
 * endWord.length == beginWord.length
 * 1 <= wordList.length <= 5000
 * wordList[i].length == beginWord.length
 * beginWord, endWord, and wordList[i] consist of lowercase English
 * letters.
 * beginWord != endWord
 * All the words in wordList are unique.
 *
 *
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength = function (beginWord, endWord, wordList) {
  const dictSet = new Set(wordList)
  if (!dictSet.has(endWord)) return 0

  const endWordSet = new Set([endWord])

  let curLevelWordSet = new Set([beginWord])
  let level = 1
  while (curLevelWordSet.size) {
    const nextLevelWordSet = new Set()
    for (const word of curLevelWordSet) {
      for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < 26; j++) {
          const newChar = String.fromCharCode(97 + j)
          if (newChar !== word[i]) {
            const newWord = word.slice(0, i) + newChar + word.slice(i + 1)
            if (endWordSet.has(newWord)) {
              return level + 1
            }
            if (dictSet.has(newWord)) {
              nextLevelWordSet.add(newWord)
              dictSet.delete(newWord)
            }
          }
        }
      }
    }

    level++
    curLevelWordSet = nextLevelWordSet
    // if (nextLevelWordSet.size > endWordSet) {
    //   [nextLevelWordSet, endWordSet] =
    //     [endWordSet, nextLevelWordSet]
    // }
  }

  return 0
}

// @lc code=end
