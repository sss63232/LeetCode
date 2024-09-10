/*
 * @lc app=leetcode id=658 lang=javascript
 *
 * [658] Find K Closest Elements
 *
 * https://leetcode.com/problems/find-k-closest-elements/description/
 *
 * algorithms
 * Medium (47.53%)
 * Likes:    8155
 * Dislikes: 686
 * Total Accepted:    560.9K
 * Total Submissions: 1.2M
 * Testcase Example:  '[1,2,3,4,5]\n4\n3'
 *
 * Given a sorted integer array arr, two integers k and x, return the k closest
 * integers to x in the array. The result should also be sorted in ascending
 * order.
 *
 * An integer a is closer to x than an integer b if:
 *
 *
 * |a - x| < |b - x|, or
 * |a - x| == |b - x| and a < b
 *
 *
 *
 * Example 1:
 * Input: arr = [1,2,3,4,5], k = 4, x = 3
 * Output: [1,2,3,4]
 * Example 2:
 * Input: arr = [1,2,3,4,5], k = 4, x = -1
 * Output: [1,2,3,4]
 *
 *
 * Constraints:
 *
 *
 * 1 <= k <= arr.length
 * 1 <= arr.length <= 10^4
 * arr is sorted in ascending order.
 * -10^4 <= arr[i], x <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} target
 * @return {number[]}
 */
var findClosestElements = function (arr, k, target) {
    let left = 0, right = arr.length - k;
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      
      // 如果mid + k位元素更靠近x，則調整左邊界
      if (target - arr[mid] > arr[mid + k] - target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    
    // 從left開始，選擇k個元素
    return arr.slice(left, left + k);
}
// @lc code=end
