/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 *
 * https://leetcode.com/problems/single-number/description/
 *
 * algorithms
 * Easy (60.05%)
 * Likes:    2388
 * Dislikes: 91
 * Total Accepted:    459.4K
 * Total Submissions: 764.9K
 * Testcase Example:  '[2,2,1]'
 *
 * Given a non-empty array of integers, every element appears twice except for
 * one. Find that single one.
 *
 * Note:
 *
 * Your algorithm should have a linear runtime complexity. Could you implement
 * it without using extra memory?
 *
 * Example 1:
 *
 *
 * Input: [2,2,1]
 * Output: 1
 *
 *
 * Example 2:
 *
 *
 * Input: [4,1,2,1,2]
 * Output: 4
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 *
 * XOR
 * Because a⊕0=a and a⊕a=0
 * Then: a⊕b⊕a=(a⊕a)⊕b=0⊕b=b
 * So we can XOR all bits together to find the unique number.
 *
 * xor @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#(Bitwise_XOR)
 */
var singleNumber = function (nums) {
  return nums.reduce((prev, curr) => prev ^ curr, 0)
}
