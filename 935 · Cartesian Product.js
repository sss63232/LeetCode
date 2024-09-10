// https://www.lintcode.com/problem/935/description

export class Solution {
  /**
   * @param setList: The input set list
   * @return: the cartesian product of the set list
   *          we will sort your return value in output
   */
  getSet(setList) {
    // Write your code here
    const results = []
    const dfs = (path, targetSetIdx) => {
      if (path.length === setList.length) {
        results.push(path)
        return
      }

      const targetSet = setList[targetSetIdx]
      for (let i = 0; i < targetSet.length; i++) {
        dfs([...path, targetSet[i]], targetSetIdx + 1)
      }
    }

    dfs([], 0)
    return results
  }
}
