// https://www.lintcode.com/problem/148/

export class Solution {
  /**
   * @param nums: A list of integer which is 0, 1 or 2
   * @return: nothing
   */
  sortColors(nums) {
    const _swapValues = (idx1, idx2) => {
      const temp = nums[idx1]
      nums[idx1] = nums[idx2]
      nums[idx2] = temp
    }

    let zeroTail = 0
    let twoTail = nums.length - 1

    let i = 0
    while (i <= twoTail) {
      switch (nums[i]) {
        case 0: {
          _swapValues(i, zeroTail)
          zeroTail++
          i++ // 新增這行
          break
        }
        case 1: {
          i++
          break
        }
        case 2: {
          _swapValues(i, twoTail)
          twoTail--
          break
        }
      }
    }
  }
}
