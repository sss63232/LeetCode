export class Solution {
  /**
   * @param nums: a mountain sequence which increase firstly and then decrease
   * @return: then mountain top
   */
  mountainSequence(nums) {
    // write your code here
    if(!nums.length){
      return
    }

    if(nums.length===1){
      return nums[0]
    }

    let leftIdx = 0
    let rightIdx = nums.length-1
    while(leftIdx+1<rightIdx){
      const midIdx = leftIdx + Math.floor((rightIdx-leftIdx)/2)
      if(nums[midIdx+1]>nums[midIdx]){
        leftIdx = midIdx+1
      } else {
        rightIdx = midIdx
      }
    }

    return Math.max(nums[leftIdx], nums[rightIdx])
  }
}