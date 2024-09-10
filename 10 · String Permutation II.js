// https://www.lintcode.com/problem/10/

export class Solution {
  /**
   * @param str: A string
   * @return: all permutations
   *          we will sort your return value in output
   */
  stringPermutation2(str) {
    const chars = str.split("").sort()
    const result = []
    const used = new Array(chars.length).fill(false)

    const dfs = (current) => {
      if (current.length === chars.length) {
        result.push(current.join(""))
        return
      }

      for (let i = 0; i < chars.length; i++) {
        if (used[i]) continue
        if (i > 0 && chars[i] === chars[i - 1] && !used[i - 1]) continue

        used[i] = true
        current.push(chars[i])
        dfs(current)
        current.pop()
        used[i] = false
      }
    }

    dfs([])
    return result
  }
}
