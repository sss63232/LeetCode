/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
 *
 * algorithms
 * Easy (40.74%)
 * Likes:    1507
 * Dislikes: 3248
 * Total Accepted:    594.7K
 * Total Submissions: 1.5M
 * Testcase Example:  '[1,1,2]'
 *
 * Given a sorted array nums, remove the duplicates in-place such that each
 * element appear only once and return the new length.
 *
 * Do not allocate extra space for another array, you must do this by modifying
 * the input array in-place with O(1) extra memory.
 *
 * Example 1:
 *
 *
 * Given nums = [1,1,2],
 *
 * Your function should return length = 2, with the first two elements of nums
 * being 1 and 2 respectively.
 *
 * It doesn't matter what you leave beyond the returned length.
 *
 * Example 2:
 *
 *
 * Given nums = [0,0,1,1,1,2,2,3,3,4],
 *
 * Your function should return length = 5, with the first five elements of nums
 * being modified to 0, 1, 2, 3, and 4 respectively.
 *
 * It doesn't matter what values are set beyond the returned length.
 *
 *
 * Clarification:
 *
 * Confused why the returned value is an integer but your answer is an array?
 *
 * Note that the input array is passed in by reference, which means
 * modification to the input array will be known to the caller as well.
 *
 * Internally you can think of this:
 *
 *
 * // nums is passed in by reference. (i.e., without making a copy)
 * int len = removeDuplicates(nums);
 *
 * // any modification to nums in your function would be known by the caller.
 * // using the length returned by your function, it prints the first len
 * elements.
 * for (int i = 0; i < len; i++) {
 * print(nums[i]);
 * }
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 *
 * 使用雙指針，
 * 一個快指針遍歷整個 Array
 * 另外一個慢指針負責收集 unique num
 */
var removeDuplicates = function (nums) {
  // let uniNumListTailIdx = 0
  // nums.forEach(num => {
  //   if (num !== nums[uniNumListTailIdx]) {
  //     uniNumListTailIdx++
  //     nums[uniNumListTailIdx] = num
  //   }
  // })
  // return uniNumListTailIdx + 1

  if (nums.length === 1) return 1
  let tailIdx = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[tailIdx - 1]) {
      nums[tailIdx] = nums[i]
      tailIdx++
    }
  }

  return tailIdx
}
