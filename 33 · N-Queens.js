export class Solution {
  /**
   * @param n: The number of queens
   * @return: All distinct solutions
   *          we will sort your return value in output
   */
  solveNQueens(n) {
    // write your code here
    if (!n) return
    if (n === 1) return [["Q"]]

    const _isValid = (listOfQColIdx, toBeAddedQColIdx) => {
      const toBeAddedRowIdx = listOfQColIdx.length
      return !listOfQColIdx.some(
        (oneQColIdx, rowIdx) =>
          oneQColIdx === toBeAddedQColIdx ||
          rowIdx - oneQColIdx === toBeAddedRowIdx - toBeAddedQColIdx ||
          rowIdx + oneQColIdx === toBeAddedRowIdx + toBeAddedQColIdx
      )
    }

    // type Solution = number[], ex [3,6,..]
    // type SolutionList = Solution[]
    const solutionList = []
    const _dfs = (currentSolution) => {
      if (currentSolution.length === n) {
        solutionList.push(currentSolution)
        return
      }

      for (let i = 0; i < n; i++) {
        if (_isValid(currentSolution, i)) {
          _dfs([...currentSolution, i])
        }
      }
    }

    // [[3,4,6...], [3,6,8...], ....]
    const _draw = (listOfSolution) =>
      listOfSolution.map((solution) =>
        solution.map((colIdxOfQ) => {
          const dots = new Array(n).fill(".")
          dots[colIdxOfQ] = "Q"
          return dots.join("")
        })
      )

    _dfs([])
    return _draw(solutionList)
  }
}
