export class Solution {
  /**
   * @param k: An integer
   * @param nums: An integer array
   * @return: kth smallest element
   */
  kthSmallest(k, nums) {
    // swap
    const _swap = (idx1, idx2) => {
      const tmp = nums[idx1]
      nums[idx1] = nums[idx2]
      nums[idx2] = tmp
    }

    // Partition function
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

    // Quickselect function
    const _quickSelect = (startIdx, endIdx, targetIdx) => {
      const sortedIdx = _partition(startIdx, endIdx)
      if (sortedIdx === targetIdx) return nums[sortedIdx]

      if (sortedIdx < targetIdx) {
        return _quickSelect(sortedIdx + 1, endIdx, targetIdx)
      } else {
        return _quickSelect(startIdx, sortedIdx - 1, targetIdx)
      }
    }

    return _quickSelect(0, nums.length - 1, k - 1)
  }
}
