export class Solution {
    /**
     * @param nums: a rotated sorted array
     * @return: the minimum number in the array
     */
    findMin(nums) {
        // write your code here
        if (!nums.length) {
            return
        }

        if (nums.length === 1) {
            return nums[0]
        }

        if (nums[nums.length - 1] > nums[0]) {
            return nums[0]
        }

        let leftIdx = 0
        let rightIdx = nums.length - 1
        while (rightIdx - leftIdx > 1) {
            const midIdx = leftIdx + Math.floor((rightIdx - leftIdx) / 2)
            console.log('TCL=> ~ findMin ~ midIdx:', midIdx)
            const mid = nums[midIdx]
            console.log('TCL=> ~ findMin ~ mid:', mid)
            if (mid > nums[0]) {
                leftIdx = midIdx
            } else {
                rightIdx = midIdx
            }
        }

        console.log('TCL=> ~ findMin ~ rightIdx:', rightIdx)
        console.log('TCL=> ~ findMin ~ leftIdx:', leftIdx)
        console.log('TCL=> ~ findMin ~ nums[rightIdx]:', nums[rightIdx])
        console.log('TCL=> ~ findMin ~ nums[leftIdx]:', nums[leftIdx])
        console.log('TCL=> ~ findMin ~ Math.min([nums[leftIdx], nums[rightIdx]]):', Math.min(nums[leftIdx], nums[rightIdx]))

        return Math.min(nums[leftIdx], nums[rightIdx])
    }
}