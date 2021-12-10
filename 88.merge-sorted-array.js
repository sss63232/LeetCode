/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 *
 * https://leetcode.com/problems/merge-sorted-array/description/
 *
 * algorithms
 * Easy (35.66%)
 * Likes:    1080
 * Dislikes: 2759
 * Total Accepted:    365.1K
 * Total Submissions: 1M
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as
 * one sorted array.
 *
 * Note:
 *
 *
 * The number of elements initialized in nums1 and nums2 are m and n
 * respectively.
 * You may assume that nums1 has enough space (size that is greater or equal to
 * m + n) to hold additional elements from nums2.
 *
 *
 * Example:
 *
 *
 * Input:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 *
 * Output: [1,2,2,3,5,6]
 *
 *
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let targetIdx = nums1.length - 1
  let nums1EndIdx = m - 1
  let nums2EndIdx = n - 1

  // while (nums2EndIdx >= 0) {
  //   const val1 = nums1[nums1EndIdx]
  //   const val2 = nums2[nums2EndIdx]

  //   if (nums1EndIdx < 0) {
  //     nums1[targetIdx] = val2
  //     nums2EndIdx--
  //   } else {
  //     if (val1 > val2) {
  //       nums1[targetIdx] = val1
  //       nums1EndIdx--
  //     } else {
  //       nums1[targetIdx] = val2
  //       nums2EndIdx--
  //     }
  //   }

  //   targetIdx--
  // }

  while (targetIdx >= 0) {
    const value1 = nums1[nums1EndIdx]
    const value2 = nums2[nums2EndIdx]

    if (value2 === undefined || value1 > value2) {
      nums1[targetIdx] = value1
      nums1EndIdx--
    }

    if (value1 === undefined || value2 >= value1) {
      nums1[targetIdx] = value2
      nums2EndIdx--
    }

    targetIdx--
  }
}

/**
 * @see https://github.com/azl397985856/leetcode/blob/master/problems/88.merge-sorted-array.md
 */
