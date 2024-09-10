// https://www.lintcode.com/problem/5

export class Solution {
  /**
   * @param k: An integer
   * @param nums: An array
   * @return: the Kth largest element
   */
  kthLargestElement(k, nums) {
    // write your code here
    if (!nums || !k || !nums.length || nums.length < k) return

    const targetIdx = nums.length - k

    const _swap = (idx1, idx2) => {
      const temp = nums[idx1]
      nums[idx1] = nums[idx2]
      nums[idx2] = temp
    }

    const _partition = (startIdx, endIdx) => {
      const pivot = nums[endIdx]
      let leftIdx = startIdx
      let rightIdx = endIdx - 1

      while (leftIdx <= rightIdx) {
        while (nums[leftIdx] < pivot && leftIdx <= rightIdx) {
          leftIdx++
        }

        while (nums[rightIdx] >= pivot && leftIdx <= rightIdx) {
          rightIdx--
        }

        if (leftIdx < rightIdx) {
          _swap(leftIdx, rightIdx)
        }
      }
      _swap(leftIdx, endIdx)
      return leftIdx
    }

    const _quickSelect = (startIdx, endIdx) => {
      const sortedIdx = _partition(startIdx, endIdx)
      if (sortedIdx === targetIdx) return nums[targetIdx]
      if (sortedIdx < targetIdx) {
        return _quickSelect(sortedIdx + 1, endIdx)
      } else {
        return _quickSelect(startIdx, sortedIdx - 1)
      }
    }

    return _quickSelect(0, nums.length - 1)
  }
}
