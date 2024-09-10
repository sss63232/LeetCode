export class Solution {
  /**
   * @param start: a string
   * @param end: a string
   * @param dict: a set of string
   * @return: An integer
   */
  ladderLength(start, end, dict) {
    // Add end word to the dictionary
    dict.add(end)

    const queue = [[start, 1]]
    const visited = new Set([start])

    const ALPHABET = "abcdefghijklmnopqrstuvwxyz"
    while (queue.length > 0) {
      const [word, level] = queue.shift()

      if (word === end) {
        return level
      }

      for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < 26; j++) {
          const newWord = word.slice(0, i) + ALPHABET[j] + word.slice(i + 1)
          if (dict.has(newWord) && !visited.has(newWord)) {
            queue.push([newWord, level + 1])
            visited.add(newWord)
          }
        }
      }
    }

    return 0 // No transformation sequence found
  }
}
