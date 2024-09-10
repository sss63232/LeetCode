/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 *
 * https://leetcode.com/problems/number-of-islands/description/
 *
 * algorithms
 * Medium (59.77%)
 * Likes:    22708
 * Dislikes: 518
 * Total Accepted:    2.8M
 * Total Submissions: 4.7M
 * Testcase Example:  '[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]'
 *
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and
 * '0's (water), return the number of islands.
 * 
 * An island is surrounded by water and is formed by connecting adjacent lands
 * horizontally or vertically. You may assume all four edges of the grid are
 * all surrounded by water.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: grid = [
 * ⁠ ["1","1","1","1","0"],
 * ⁠ ["1","1","0","1","0"],
 * ⁠ ["1","1","0","0","0"],
 * ⁠ ["0","0","0","0","0"]
 * ]
 * Output: 1
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: grid = [
 * ⁠ ["1","1","0","0","0"],
 * ⁠ ["1","1","0","0","0"],
 * ⁠ ["0","0","1","0","0"],
 * ⁠ ["0","0","0","1","1"]
 * ]
 * Output: 3
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 300
 * grid[i][j] is '0' or '1'.
 * 
 * 
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const _isInbound = (rowIdx, colIdx) => {
        return rowIdx >=0 && rowIdx < grid.length && colIdx >=0 && colIdx < grid[0].length
    }

    const _checkOutTheFoundIslandByBFS = (rowIdx, colIdx) => {
        const dx = [0, 1, 0, -1]
        const dy = [1, 0, -1, 0]

        const queue = [[rowIdx, colIdx]]
        const discoveredSet = new Set()
        discoveredSet.add(`${rowIdx}-${colIdx}`)
        while(queue.length){
            const currentCell = queue.shift()
            const [curRowIdx, curColIdx] = currentCell
            grid[curRowIdx][curColIdx] = 'founded'
            for(let k=0; k<4; k++){ 
                const neighborRowIdx = curRowIdx + dx[k]
                const neighborColIdx = curColIdx + dy[k]
                if(
                    _isInbound(neighborRowIdx, neighborColIdx) &&
                    !discoveredSet.has(`${neighborRowIdx}-${neighborColIdx}`)
                ){
                    discoveredSet.add(`${neighborRowIdx}-${neighborColIdx}`)
                    if(grid[neighborRowIdx][neighborColIdx]==='1'){
                        grid[neighborRowIdx][neighborColIdx] = 'founed'
                        queue.push([neighborRowIdx, neighborColIdx])
                    }
                }
            }
        }
    }

    const _checkOutTheFoundIslandByDFS = (rowIdx, colIdx) => {
        if(!_isInbound(rowIdx, colIdx)){
            return
        }
        if(grid[rowIdx][colIdx] !== '1'){
            return 
        }

        grid[rowIdx][colIdx] = 'found'
        const dx = [0, 1, 0, -1]
        const dy = [1, 0, -1, 0]
        for(let k=0; k<4; k++){
            const neighborRowIdx = rowIdx + dx[k]
            const neighborColIdx = colIdx + dy[k]
            _checkOutTheFoundIslandByDFS(neighborRowIdx, neighborColIdx)
        }
    }

    const numberOfRows = grid.length
    const numberOfColumns = grid[0].length

    let numberOfIslands = 0
    for(let i=0; i<numberOfRows; i++){
        for(let j=0; j<numberOfColumns; j++){
            const cell = grid[i][j]
            if(cell==='1'){
                numberOfIslands++
                _checkOutTheFoundIslandByDFS(i, j)
            }
        }
    }

    return numberOfIslands
    
};
// @lc code=end

