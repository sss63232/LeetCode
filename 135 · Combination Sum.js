// https://www.lintcode.com/problem/135/

export class Solution {
  /**
   * @param candidates: A list of integers
   * @param target: An integer
   * @return: A list of lists of integers
   *          we will sort your return value in output
   */
  combinationSum(candidates, target) {
    // write your code here
    candidates.sort((a, b) => a - b)
    candidates = Array.from(new Set(candidates))
    const combinations = []

    const _getSumOf = (numberList) =>
      numberList.reduce((acc, cur) => acc + cur, 0)

    const _dfs = (path, startIdx) => {
      const currentSum = _getSumOf(path)
      if (currentSum === target) {
        combinations.push(path)
        return
      }

      if (currentSum > target) {
        return
      }

      for (let i = startIdx; i < candidates.length; i++) {
        _dfs([...path, candidates[i]], i)
      }
    }

    _dfs([], 0)
    return combinations
  }
}
