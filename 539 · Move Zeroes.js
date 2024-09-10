// https://www.lintcode.com/problem/539/

export class Solution {
    /**
     * @param nums: an integer array
     * @return: nothing
     */
    moveZeroes(nums) {
      // write your code here
      if (!nums || !nums.length || nums.length === 1) return
  
      const _swap = (idx1, idx2) => {
        const temp = nums[idx1]
        nums[idx1] = nums[idx2]
        nums[idx2] = temp
      }
  
      let walker = 0
      let nonZeroTail = 0
      while (walker < nums.length) {
        if (nums[walker] !== 0) {
          _swap(walker, nonZeroTail)
          nonZeroTail++
        }
        walker++
      }
    }
  }
  