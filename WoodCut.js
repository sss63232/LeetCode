// @see
// https://www.lintcode.com/problem/183/
export class Solution {
  /**
   * @param L: Given n pieces of wood with length L[i]
   * @param k: An integer
   * @return: The maximum length of the small pieces
   */
  woodCut (L, k) {
    // write your code here
    if (!L.length) return 0

    const _getPiecesOf = perLength =>
      L.map(l => Math.floor(l / perLength)).reduce((acc, cur) => acc + cur)

    let lengthStartIdx = 1
    let lengthEndIdx = Math.max(...L)
    while (lengthStartIdx + 1 < lengthEndIdx) {
      const midPerPieceLength =
        lengthStartIdx + Math.floor((lengthEndIdx - lengthStartIdx) / 2)
      const midPieces = _getPiecesOf(midPerPieceLength)

      if (midPieces >= k) {
        lengthStartIdx = midPerPieceLength
      } else {
        lengthEndIdx = midPerPieceLength
      }
    }

    if (_getPiecesOf(lengthEndIdx) >= k) return lengthEndIdx
    if (_getPiecesOf(lengthStartIdx) >= k) return lengthStartIdx
    return 0
  }
}
