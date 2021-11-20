export class Solution {
  /**
   * shortestPath
   *
   * @param grid: a chessboard included 0 (false) and 1 (true)
   * @param source: a point
   * @param destination: a point
   * @return: the shortest path
   */
  shortestPath (grid, source, destination) {
    // write your code here
    const dx = [1, 1, -1, -1, 2, 2, -2, -2]
    const dy = [2, -2, 2, -2, 1, -1, 1, -1]

    const rows = grid.length
    const cols = grid[0].length

    const _inbound = (rowIdx, colIdx) =>
      rowIdx >= 0 && rowIdx < rows && colIdx >= 0 && colIdx < cols

    let count = 0
    const queue = [source]
    while (queue.length) {
      const levelSize = queue.length
      for (let k = 0; k < levelSize; k++) {
        const cur = queue.shift()
        if (cur[0] === destination[0] && cur[1] === destination[1]) {
          return count
        }

        for (let i = 0; i < 8; i++) {
          const nextRowIdx = cur[0] + dx[i]
          const nextColIdx = cur[1] + dy[i]
          if (
            _inbound(nextRowIdx, nextColIdx) &&
            grid[nextRowIdx][nextColIdx] !== 1
          ) {
            queue.push([nextRowIdx, nextColIdx])
          }
        }
      }
      count++
    }

    return -1
  }
}
