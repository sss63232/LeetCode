export class Solution {
  /**
   * @param {number[][]} grid - a 2D grid
   * @return {number} - the minimum distance sum or -1 if not possible
   */
  shortestDistance(grid) {
    const rows = grid.length
    if (rows === 0) return -1

    const cols = grid[0].length
    if (cols === 0) return -1

    const sumx = []
    const sumy = []
    const listOfHousePostionX = []
    const listOfHousePositionY = []
    let result = Number.MAX_SAFE_INTEGER

    for (let i = 0; i < rows; ++i) {
      for (let j = 0; j < cols; ++j) {
        if (grid[i][j] === 1) {
          listOfHousePostionX.push(i)
          listOfHousePositionY.push(j)
        }
      }
    }

    listOfHousePostionX.sort((a, b) => a - b)
    listOfHousePositionY.sort((a, b) => a - b)
    const howManyHouses = listOfHousePostionX.length
    sumx.push(0)
    sumy.push(0)

    for (let i = 1; i <= howManyHouses; ++i) {
      sumx.push(sumx[i - 1] + listOfHousePostionX[i - 1])
      sumy.push(sumy[i - 1] + listOfHousePositionY[i - 1])
    }

    for (let i = 0; i < rows; ++i) {
      for (let j = 0; j < cols; ++j) {
        if (grid[i][j] === 0) {
          const costX = this.getCost(
            listOfHousePostionX,
            sumx,
            i,
            howManyHouses
          )
          const costY = this.getCost(
            listOfHousePositionY,
            sumy,
            j,
            howManyHouses
          )
          if (costX + costY < result) {
            result = costX + costY
          }
        }
      }
    }

    return result === Number.MAX_SAFE_INTEGER ? -1 : result
  }

  getCost(positionXList, sumOfXList, positionX, howManyHouses) {
    if (howManyHouses === 0) return 0
    if (positionXList[0] > positionX) return sumOfXList[howManyHouses] - positionX * howManyHouses

    let l = 0,
      r = howManyHouses - 1
    while (l + 1 < r) {
      const mid = l + Math.floor((r - l) / 2)
      if (positionXList[mid] <= positionX) l = mid
      else r = mid - 1
    }

    let index = 0
    if (positionXList[r] <= positionX) index = r
    else index = l

    return (
      sumOfXList[howManyHouses] -
      sumOfXList[index + 1] -
      positionX * (howManyHouses - index - 1) +
      (index + 1) * positionX -
      sumOfXList[index + 1]
    )
  }
}
