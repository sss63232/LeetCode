// https://www.lintcode.com/problem/585/
export class Solution {
  /**
   * mountainSequence
   *
   * @param nums: a mountain sequence which increase firstly and then decrease
   * @return: then mountain top
   */
  mountainSequence (nums) {
    // write your code here
    if (nums.length === 1) return nums[0]

    let left = 0
    let right = nums.length - 1
    while (left + 1 < right) {
      const midIdx = left + Math.floor((right - left) / 2)
      const midNum = nums[midIdx]

      const preNum = nums[midIdx - 1]
      const nextNum = nums[midIdx + 1]

      if (midNum > preNum && midNum > nextNum) return midNum
      if (midNum > preNum) {
        left = midIdx + 1
      } else if (midNum > nextNum) {
        right = midIdx - 1
      }
    }

    return Math.max(nums[left], nums[right])
  }
}
