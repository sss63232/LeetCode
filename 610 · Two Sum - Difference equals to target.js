// https://www.lintcode.com/problem/610/

export class Solution {
  /**
   * @param nums: an array of Integer
   * @param target: an integer
   * @return: [num1, num2] (index1 < index2)
   */
  twoSum7(nums, target) {
    if (nums == null || nums.length < 2) {
      return []
    }

    target = Math.abs(target)

    let j = 1
    for (let i = 0; i < nums.length; i++) {
      j = Math.max(j, i + 1)
      while (j < nums.length && nums[j] - nums[i] < target) {
        j++
      }
      if (j >= nums.length) {
        break
      }
      if (nums[j] - nums[i] === target) {
        return [nums[i], nums[j]]
      }
    }

    return []
  }
}
