// @see
// https://www.lintcode.com/problem/600/
export class Solution {
  /**
   * minArea
   *
   * @param image: a binary matrix with '0' and '1'
   * @param blackRowIdx: the location of one of the black pixels
   * @param blackColIdx: the location of one of the black pixels
   * @return: an integer
   */
  minArea (image, blackRowIdx, blackColIdx) {
    // Write your code here
    const rows = image.length
    if (!rows) return 0
    const cols = image[0].length
    if (!cols) return 0

    const _isEmptyCol = colIdx =>
      image.map(row => row[colIdx]).every(p => p === '0')
    const _isEmptyRow = rowIdx => image[rowIdx].split('').every(p => p === '0')

    const _findLeft = (left, right) => {
      while (left + 1 < right) {
        const mid = left + Math.floor((right - left) / 2)
        if (_isEmptyCol(mid)) {
          left = mid
        } else {
          right = mid
        }
      }

      if (!_isEmptyCol(left)) return left
      return right
    }

    const _findRight = (left, right) => {
      while (left + 1 < right) {
        const mid = left + Math.floor((right - left) / 2)
        if (_isEmptyCol(mid)) {
          right = mid
        } else {
          left = mid
        }
      }

      if (!_isEmptyCol(right)) return right
      return left
    }

    const _findTop = (left, right) => {
      while (left + 1 < right) {
        const mid = left + Math.floor((right - left) / 2)
        if (_isEmptyRow(mid)) {
          left = mid
        } else {
          right = mid
        }
      }

      if (!_isEmptyRow(left)) return left
      return right
    }

    const _findBottom = (left, right) => {
      while (left + 1 < right) {
        const mid = left + Math.floor((right - left) / 2)
        if (_isEmptyRow(mid)) {
          right = mid
        } else {
          left = mid
        }
      }

      if (!_isEmptyRow(right)) return right
      return left
    }

    const left = _findLeft(0, blackColIdx)
    const right = _findRight(blackColIdx, cols - 1)
    const top = _findTop(0, blackRowIdx)
    const bottom = _findBottom(blackRowIdx, rows - 1)
    return (right - left + 1) * (bottom - top + 1)
  }
}
