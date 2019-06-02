/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 *
 * https://leetcode.com/problems/majority-element/description/
 *
 * algorithms
 * Easy (52.55%)
 * Likes:    1632
 * Dislikes: 142
 * Total Accepted:    382K
 * Total Submissions: 726.1K
 * Testcase Example:  '[3,2,3]'
 *
 * Given an array of size n, find the majority element. The majority element is
 * the element that appears more than ⌊ n/2 ⌋ times.
 *
 * You may assume that the array is non-empty and the majority element always
 * exist in the array.
 *
 * Example 1:
 *
 *
 * Input: [3,2,3]
 * Output: 3
 *
 * Example 2:
 *
 *
 * Input: [2,2,1,1,1,2,2]
 * Output: 2
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const threshold = nums.length / 2

  const timesMap = {}

  for (let i = 0; i < nums.length; i++) {
    const curKey = nums[i]
    if (timesMap[curKey]) {
      timesMap[curKey]++
    } else {
      timesMap[curKey] = 1
    }

    if (timesMap[curKey] > threshold) {
      return curKey
    }
  }
}

/**
 * references
 * Boyer-Moore Algorithm
 * @see https://blog.csdn.net/kimixuchen/article/details/52787307
 */
