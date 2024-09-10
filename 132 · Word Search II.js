// https://www.lintcode.com/problem/132/

export class Solution {
  /**
   * @param board: A list of lists of character
   * @param words: A list of string
   * @return: A list of string
   *          we will sort your return value in output
   */
  wordSearchII(board, words) {
    const getPrefixMapFrom = (wordList) => {
      const map = new Map()
      wordList.forEach((word) => {
        for (let i = 0; i < word.length; i++) {
          const prefix = word.slice(0, i + 1)
          if (!map.has(prefix)) {
            // 只有當前綴不存在於 Map 中時，才將其設置為 false。如果前綴已經存在（可能是因為它是另一個單詞的完整單詞），則保持其原有的值不變。
            map.set(prefix, false)
          }
        }
        map.set(word, true)
      })
      return map
    }
    const wordAndPrefixMap = getPrefixMapFrom(words)

    const dx = [0, 1, 0, -1]
    const dy = [1, 0, -1, 0]
    const isInbound = (rowIdx, colIdx) => {
      return (
        rowIdx >= 0 &&
        rowIdx < board.length &&
        colIdx >= 0 &&
        colIdx < board[0].length
      )
    }

    const output = new Set()
    const dfsFromOneCell = (stringSoFar, rowIdx, colIdx, visited) => {
      if (!wordAndPrefixMap.has(stringSoFar)) {
        return
      }

      if (wordAndPrefixMap.get(stringSoFar)) {
        output.add(stringSoFar)
        // Don't return here, continue to search for longer words
      }

      for (let i = 0; i < 4; i++) {
        const nextRowIdx = rowIdx + dx[i]
        const nextColIdx = colIdx + dy[i]
        if (!isInbound(nextRowIdx, nextColIdx)) {
          continue
        }
        const cellKey = `${nextRowIdx}-${nextColIdx}`
        if (visited.has(cellKey)) {
          continue
        }
        visited.add(cellKey)
        dfsFromOneCell(
          stringSoFar + board[nextRowIdx][nextColIdx],
          nextRowIdx,
          nextColIdx,
          visited
        )
        visited.delete(cellKey)
      }
    }

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        const visited = new Set([`${i}-${j}`])
        dfsFromOneCell(board[i][j], i, j, visited)
      }
    }

    return Array.from(output)
  }
}
