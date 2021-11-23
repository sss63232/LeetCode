// https://www.lintcode.com/problem/159/
export class Solution {
  /**
   * findMin
   *
   * @param nums: a rotated sorted array
   * @return: the minimum number in the array
   */
  findMin (nums) {
    // write your code here
    let left = 0
    let right = nums.length - 1

    while (left + 1 < right) {
      const midIdx = left + Math.floor((right - left) / 2)
      const midNum = nums[midIdx]
      if (midNum > nums[right]) {
        left = midIdx + 1
      } else {
        right = midIdx
      }
    }

    return Math.min(nums[left], nums[right])
  }
}
