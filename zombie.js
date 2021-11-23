// https://www.lintcode.com/problem/598/

export class Solution {
  /**
   * zombie
   *
   * @param grid: a 2D integer grid
   * @return: an integer
   */
  zombie (grid) {
    // write your code here

    const HUMAN = 0
    const ZOMBIE = 1

    const zombieQueue = []

    let peopleCount = 0
    grid.forEach((row, rowIdx) => {
      row.forEach((cell, colIdx) => {
        switch (cell) {
          case HUMAN: {
            peopleCount++
            break
          }
          case ZOMBIE: {
            zombieQueue.push([rowIdx, colIdx])
            break
          }
          default:
            break
        }
      })
    })

    if (peopleCount === 0) return 0

    const dx = [0, 0, 1, -1]
    const dy = [1, -1, 0, 0]

    const _isInbound = ([rowIdx, colIdx]) =>
      rowIdx >= 0 &&
      rowIdx < grid.length &&
      colIdx >= 0 &&
      colIdx < grid[0].length

    const _isHuman = ([rowIdx, colIdx]) => grid[rowIdx][colIdx] === HUMAN

    let daysCount = 0
    while (zombieQueue.length) {
      daysCount++
      const zombies = zombieQueue.length
      for (let i = 0; i < zombies; i++) {
        const curZombiePosition = zombieQueue.shift()
        for (let j = 0; j < 4; j++) {
          const adjPosition = [
            curZombiePosition[0] + dx[j],
            curZombiePosition[1] + dy[j]
          ]

          if (_isInbound(adjPosition) && _isHuman(adjPosition)) {
            grid[adjPosition[0]][adjPosition[1]] = ZOMBIE
            peopleCount--
            if (peopleCount === 0) {
              return daysCount
            }

            zombieQueue.push(adjPosition)
          }
        }
      }
    }

    return -1
  }
}
