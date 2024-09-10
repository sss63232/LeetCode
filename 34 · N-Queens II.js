// https://www.lintcode.com/problem/34/description

export class Solution {
  /**
   * @param n: The number of queens.
   * @return: The total number of distinct solutions.
   */
  totalNQueens(n) {
    if (n === 0 || n === 1) return 1
    if (n < 4) return 0

    let count = 0
    const occupiedColumns = new Set()
    const occupiedAscendingDiagonals = new Set() // 原 diag1
    const occupiedDescendingDiagonals = new Set() // 原 diag2

    const backtrack = (row) => {
      if (row === n) {
        count++
        return
      }

      for (let col = 0; col < n; col++) {
        if (
          occupiedColumns.has(col) ||
          occupiedAscendingDiagonals.has(row + col) ||
          occupiedDescendingDiagonals.has(row - col)
        ) {
          continue
        }

        occupiedColumns.add(col)
        occupiedAscendingDiagonals.add(row + col)
        occupiedDescendingDiagonals.add(row - col)

        backtrack(row + 1)

        occupiedColumns.delete(col)
        occupiedAscendingDiagonals.delete(row + col)
        occupiedDescendingDiagonals.delete(row - col)
      }
    }

    backtrack(0)
    return count
  }
}
