export class Solution {
  /**
   * @param a: an integer array
   * @param k: a postive integer <= length(A)
   * @param target: an integer
   * @return: A list of lists of integer
   *          we will sort your return value in output
   */
  kSumII(a, k, target) {
    // write your code here
    a.sort((a, b) => a - b)

    const results = []

    const _dfs = (path, currentSum, idx) => {
      if (currentSum === target && path.length === k) {
        results.push(path)
        return
      }
      if (currentSum > target || path.length > k) {
        return
      }

      for (let i = idx; i < a.length; i++) {
        const num = a[i]
        _dfs([...path, num], currentSum + num, i + 1)
      }
    }

    _dfs([], 0, 0)

    return results
  }
}
