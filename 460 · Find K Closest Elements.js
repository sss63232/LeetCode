export class Solution {
  /**
   * @param a: an integer array
   * @param target: An integer
   * @param k: An integer
   * @return: an integer array
   */
  kClosestNumbers(a, target, k) {
    // write your code here
    if (!a) return

    const _findLowestClosest = (numberList, targetNumber) => {
      let left = 0
      let right = numberList.length - 1
      while (left + 1 < right) {
        const mid = left + Math.floor((right - left) / 2)
        if (numberList[mid] < target) {
          left = mid
        } else {
          right = mid
        }
      }

      console.log(left, right)

      if (numberList[right] < targetNumber) {
        return right
      }

      if (numberList[left] <= targetNumber) {
        return left
      }
    }

    const _isLeftCloser = (numberList, targetNumber, leftIdx, rightIdx) => {
      if (leftIdx < 0) return false
      if (rightIdx > numberList.length - 1) return true

      return (
        Math.abs(targetNumber - numberList[leftIdx]) <=
        Math.abs(targetNumber - numberList[rightIdx])
      )
    }

    let left = _findLowestClosest(a, target)
    console.log("TCL=> ~ kClosestNumbers ~ left:", left)
    let right = left + 1
    const result = []
    while (result.length < k) {
      if (_isLeftCloser(a, target, left, right)) {
        result.push(a[left])
        left--
      } else {
        result.push(a[right])
        right++
      }
    }

    return result
  }
}
