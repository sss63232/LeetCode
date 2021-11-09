// @see
// https://www.lintcode.com/problem/61/
export class Solution {
  /**
   * searchRange
   *
   * @param A: an integer sorted array
   * @param target: an integer to be inserted
   * @return: a list of length 2, [index1, index2]
   */
  searchRange (A, target) {
    // write your code here

    const _findFirstTarget = nums => {
      let left = 0
      let right = nums.length
      while (left + 1 < right) {
        const mid = left + Math.floor((right - left) / 2)
        const midNum = nums[mid]
        if (target === midNum) {
          right = mid
        } else if (target > midNum) {
          left = mid + 1
        } else {
          right = mid - 1
        }
      }

      if (nums[left] === target) return left
      if (nums[right] === target) return right
      return -1
    }

    const _findLastTarget = nums => {
      let left = 0
      let right = nums.length - 1
      while (left + 1 < right) {
        const mid = left + Math.floor((right - left) / 2)
        const midNum = nums[mid]
        if (target === midNum) {
          left = mid
        } else if (target > midNum) {
          left = mid + 1
        } else {
          right = mid - 1
        }
      }

      if (nums[right] === target) return right
      if (nums[left] === target) return left
      return -1
    }

    const firstTargetIdx = _findFirstTarget(A)
    if (firstTargetIdx === -1) {
      return [-1, -1]
    }

    return [firstTargetIdx, _findLastTarget(A)]
  }
}
