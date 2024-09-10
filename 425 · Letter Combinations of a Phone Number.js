// https://www.lintcode.com/problem/425/

export class Solution {
  /**
   * @param digits: A digital string
   * @return: all possible letter combinations
   *          we will sort your return value in output
   */
  letterCombinations(digits) {
    // write your code here
    if (!digits) return []

    const digitLetterMap = {
      2: ["a", "b", "c"],
      3: ["d", "e", "f"],
      4: ["g", "h", "i"],
      5: ["j", "k", "l"],
      6: ["m", "n", "o"],
      7: ["p", "q", "r", "s"],
      8: ["t", "u", "v"],
      9: ["w", "x", "y", "z"],
    }

    const results = []
    const dfs = (stringSoFar, targetIdx) => {
      if (stringSoFar.length === digits.length) {
        results.push(stringSoFar)
        return
      }

      const num = digits[targetIdx]
      for (let i = 0; i < digitLetterMap[num].length; i++) {
        dfs(stringSoFar + digitLetterMap[num][i], targetIdx + 1)
      }
    }

    dfs("", 0)
    return results
  }
}
