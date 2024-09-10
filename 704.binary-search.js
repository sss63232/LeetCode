/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 *
 * https://leetcode.com/problems/binary-search/description/
 *
 * algorithms
 * Easy (57.80%)
 * Likes:    11782
 * Dislikes: 248
 * Total Accepted:    2.5M
 * Total Submissions: 4.3M
 * Testcase Example:  '[-1,0,3,5,9,12]\n9'
 *
 * Given an array of integers nums which is sorted in ascending order, and an
 * integer target, write a function to search target in nums. If target exists,
 * then return its index. Otherwise, return -1.
 * 
 * You must write an algorithm with O(log n) runtime complexity.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [-1,0,3,5,9,12], target = 9
 * Output: 4
 * Explanation: 9 exists in nums and its index is 4
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [-1,0,3,5,9,12], target = 2
 * Output: -1
 * Explanation: 2 does not exist in nums so return -1
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= nums.length <= 10^4
 * -10^4 < nums[i], target < 10^4
 * All the integers in nums are unique.
 * nums is sorted in ascending order.
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0
    let end = nums.length-1
    while(start+1 < end){
        const mid = start + Math.floor((end-start)/2)
        const midNum = nums[mid]
        if(midNum === target){
            end = mid
        } else if( midNum < target ){
            start = mid
        } else {
            end = mid
        }
    }

    if( nums[start] === target){
        return start
    }

    if( nums[end] === target){
        return end
    }

    return -1
};
// @lc code=end

