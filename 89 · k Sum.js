export class Solution {
  /**
   * @param a: An integer array
   * @param k: A positive integer (k <= length(A))
   * @param target: An integer
   * @return: An integer
   */
  kSum(a, k, target) {
    // write your code here
    a.sort((a, b) => a - b)
    let resultCount = 0
    const _dfs = (sumSoFar, pickedCountSoFar, startIdxToBePicked) => {
      if (pickedCountSoFar === k && sumSoFar === target) {
        resultCount++
        return
      }

      if (sumSoFar >= target) {
        return
      }

      if (startIdxToBePicked >= a.length) {
        return
      }

      for (let i = startIdxToBePicked; i < a.length; i++) {
        const num = a[i]
        _dfs(sumSoFar + num, pickedCountSoFar + 1, i + 1)
      }
    }

    _dfs(0, 0, 0)
    return resultCount
  }
}
