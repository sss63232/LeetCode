/*
 * @lc app=leetcode id=852 lang=javascript
 *
 * [852] Peak Index in a Mountain Array
 *
 * https://leetcode.com/problems/peak-index-in-a-mountain-array/description/
 *
 * algorithms
 * Easy (71.70%)
 * Likes:    1036
 * Dislikes: 1362
 * Total Accepted:    220.2K
 * Total Submissions: 306.8K
 * Testcase Example:  '[0,1,0]'
 *
 * Let's call an array arr a mountain if the following properties hold:
 *
 *
 * arr.length >= 3
 * There exists some i with 0 < i < arr.length - 1 such that:
 *
 * arr[0] < arr[1] < ... arr[i-1] < arr[i]
 * arr[i] > arr[i+1] > ... > arr[arr.length - 1]
 *
 *
 *
 *
 * Given an integer array arr that is guaranteed to be a mountain, return any i
 * such that arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... >
 * arr[arr.length - 1].
 *
 *
 * Example 1:
 * Input: arr = [0,1,0]
 * Output: 1
 * Example 2:
 * Input: arr = [0,2,1,0]
 * Output: 1
 * Example 3:
 * Input: arr = [0,10,5,2]
 * Output: 1
 * Example 4:
 * Input: arr = [3,4,5,1]
 * Output: 2
 * Example 5:
 * Input: arr = [24,69,100,99,79,78,67,36,26,19]
 * Output: 2
 *
 *
 * Constraints:
 *
 *
 * 3 <= arr.length <= 10^4
 * 0 <= arr[i] <= 10^6
 * arr is guaranteed to be a mountain array.
 *
 *
 *
 * Follow up: Finding the O(n) is straightforward, could you find an O(log(n))
 * solution?
 */

// @lc code=start
/**
 * 二分法
 * @param {number[]} arr
 * @return {number}
 */
const peakIndexInMountainArray = function (arr) {
  let left = 0
  let right = arr.length - 1
  while (left + 1 < right) {
    const mid = left + Math.floor((right - left) / 2)
    if (arr[mid + 1] > arr[mid]) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  console.log('left: ', left)
  console.log('right: ', right)
  if (arr[right] >= arr[left]) {
    return right
  } else {
    return left
  }

  // let left = 0
  // let right = arr.length - 1

  // while (left + 1 < right) {
  //   const midIdx = left + Math.floor((right - left) / 2)
  //   arr[midIdx + 1] > arr[midIdx]
  //     ? left = midIdx + 1
  //     : right = midIdx
  // }

  // return arr[left] > arr[right]
  //   ? left
  //   : right
}
// @lc code=end
