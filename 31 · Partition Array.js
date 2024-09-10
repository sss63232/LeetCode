// https://www.lintcode.com/problem/31/
export class Solution {
  /**
   * @param nums: The integer array you should partition
   * @param k: An integer
   * @return: The index after partition
   */
  partitionArray(nums, k) {
    // write your code here
    if (!nums.length) return 0

    let leftIdx = 0
    let rightIdx = nums.length - 1
    while (leftIdx <= rightIdx) {
      while (nums[leftIdx] < k && leftIdx <= rightIdx) {
        leftIdx++
      }

      while (nums[rightIdx] >= k && leftIdx <= rightIdx) {
        rightIdx--
      }

      if (leftIdx <= rightIdx) {
        const temp = nums[leftIdx]
        nums[leftIdx] = nums[rightIdx]
        nums[rightIdx] = temp

        leftIdx++
        rightIdx--
      }
    }

    return leftIdx
  }
}
