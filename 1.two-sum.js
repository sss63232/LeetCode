export class Solution {
  /**
   * @param numbers: An array of Integer
   * @param target: target = numbers[index1] + numbers[index2]
   * @return: [index1, index2] (index1 < index2)
   */
  twoSum(nums, target) {
    // write your code here
    const numsMap = new Map()
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i]
      const toBePaired = target - num
      if (numsMap.has(toBePaired)) {
        return [numsMap.get(toBePaired), i]
      } else {
        numsMap.set(num, i)
      }
    }

    return []
  }
}
