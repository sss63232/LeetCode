// https://www.lintcode.com/problem/143/description

export class Solution {
  /**
   * @param colors: A list of integer
   * @param k: An integer
   * @return: nothing
   */
  sortColors2(colors, k) {
    // write your code here
    const _swapValue = (idx1, idx2) => {
      const temp = colors[idx1]
      colors[idx1] = colors[idx2]
      colors[idx2] = temp
    }

    const _sortInPlace = (startIdx, endIdx, colorIdxFrom, colorIdxTo) => {
      if (startIdx >= endIdx || colorIdxFrom >= colorIdxTo) return

      let leftGroupTail = startIdx
      let rightGroupTail = endIdx
      let i = startIdx

      const pivot = colorIdxFrom + Math.floor((colorIdxTo - colorIdxFrom) / 2)

      while (i <= rightGroupTail) {
        if (colors[i] === pivot) {
          i++
        } else if (colors[i] < pivot) {
          _swapValue(i, leftGroupTail)
          leftGroupTail++
          i++
        } else {
          _swapValue(i, rightGroupTail)
          rightGroupTail--
        }
      }

      _sortInPlace(startIdx, leftGroupTail - 1, colorIdxFrom, pivot - 1)
      _sortInPlace(i, endIdx, pivot + 1, colorIdxTo)
    }

    _sortInPlace(0, colors.length - 1, 1, k)
    return colors
  }
}
