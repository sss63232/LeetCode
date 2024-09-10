export class Solution {
  /**
   * @param nums: An array of integers
   * @return: An integer
   */
  maxProduct(nums) {
    // write your code here
    const n = nums.length
    const firstNum = nums[0]
    if (n === 1) return firstNum

    // min~max for a single num
    let preProductMinMax = [firstNum, firstNum]

    let maxValueSoFar = Number.MIN_SAFE_INTEGER
    for (let i = 1; i < n; i++) {
      const curNum = nums[i]
      const curProductMinMaxCandidates = preProductMinMax.map((_) => _ * curNum)
      preProductMinMax = [
        Math.min(curNum, ...curProductMinMaxCandidates),
        Math.max(curNum, ...curProductMinMaxCandidates),
      ]
      maxValueSoFar = Math.max(maxValueSoFar, ...preProductMinMax)
    }

    return maxValueSoFar
  }
}
