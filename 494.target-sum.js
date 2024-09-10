/*
 * @lc app=leetcode id=494 lang=javascript
 *
 * [494] Target Sum
 *
 * https://leetcode.com/problems/target-sum/description/
 *
 * algorithms
 * Medium (47.00%)
 * Likes:    10968
 * Dislikes: 364
 * Total Accepted:    648.9K
 * Total Submissions: 1.4M
 * Testcase Example:  '[1,1,1,1,1]\n3'
 *
 * You are given an integer array nums and an integer target.
 *
 * You want to build an expression out of nums by adding one of the symbols '+'
 * and '-' before each integer in nums and then concatenate all the
 * integers.
 *
 *
 * For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1
 * and concatenate them to build the expression "+2-1".
 *
 *
 * Return the number of different expressions that you can build, which
 * evaluates to target.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,1,1,1,1], target = 3
 * Output: 5
 * Explanation: There are 5 ways to assign symbols to make the sum of nums be
 * target 3.
 * -1 + 1 + 1 + 1 + 1 = 3
 * +1 - 1 + 1 + 1 + 1 = 3
 * +1 + 1 - 1 + 1 + 1 = 3
 * +1 + 1 + 1 - 1 + 1 = 3
 * +1 + 1 + 1 + 1 - 1 = 3
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1], target = 1
 * Output: 1
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 20
 * 0 <= nums[i] <= 1000
 * 0 <= sum(nums[i]) <= 1000
 * -1000 <= target <= 1000
 *
 *
 */

// @lc code=start
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var findTargetSumWays = function (nums, target) {
//   // Seperate the nums to 2 groups: toBePositiveGroup and toBePositiveGroup
//   // 1. sum of toBePositiveGroup + sum of toBeNegativeGroup = sum
//   // 2. sum of toBePositiveGroup - sum of toBeNegativeGroup = target
//   // 3. So the toBePositiveGroup = (sum + target) / 2
//   // 4. Use DP to find the how many ways to get the toBePositiveGroup
//   const sum = nums.reduce((acc, cur) => acc + cur)
//   if ((sum + target) % 2 !== 0) return 0
//   if (target > sum) return 0

//   const sumOfToBePositiveGroup = (sum + target) / 2

//   // dp [i][j]：使用 下標為 [0, i] 的 nums [i] 能夠湊"滿" j（包括 j）這麼大容量的 sum，有 dp [i][j] 種方法。

//   // 遞推公式：
//   // if (nums[i] > j) dp[i][j] = dp[i - 1][j];
//   // else dp[i][j] = dp[i-1][j] + dp[i-1][j-nums[i]]

//   // dp 初始化
//   const dp = new Array(nums.length) // 0~i 的物品
//     .fill(0)
//     .map(() => new Array(sumOfToBePositiveGroup + 1).fill(0))

//   // initialize j=0
//   for (let i = 0; i < nums.length; i++) {
//     dp[i][0] = 1
//   }

//   // initialize i=0
//   for (let j = 1; j <= sumOfToBePositiveGroup; j++) {
//     if (j === nums[0]) {
//       dp[0][j] = 1
//     } else {
//       dp[0][j] = 0
//     }
//   }

//   console.log("TCL=> ~ findTargetSumWays ~ dp:", dp)
//   // walk through the DP table
//   for (let i = 1; i < nums.length; i++) {
//     const num = nums[i]
//     for (let j = 1; j <= sumOfToBePositiveGroup; j++) {
//       if (num > j) {
//         dp[i][j] = dp[i - 1][j]
//       } else {
//         dp[i][j] = dp[i - 1][j] + dp[i - 1][j - num]
//       }
//     }
//   }

//   console.log("TCL=> ~ findTargetSumWays ~ dp:", dp)

//   return dp[nums.length - 1][sumOfToBePositiveGroup]
// }
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let sum = nums.reduce((a, b) => a + b, 0)
  if (Math.abs(target) > sum) return 0 // No solution in this case
  if ((target + sum) % 2 === 1) return 0 // No solution in this case
  let sumOfToBePositiveGroup = (target + sum) / 2

  // 二維解法
  //   let dp = Array(nums.length)
  //     .fill([])
  //     .map(() => Array(sumOfToBePositiveGroup + 1).fill(0))

  //   // Initialize the top row(i=0)
  //   for (let j_bagSize = 1; j_bagSize <= sumOfToBePositiveGroup; j_bagSize++) {
  //     if (j_bagSize === nums[0]) {
  //       dp[0][j_bagSize] = 1
  //     }
  //   }

  //   // Initialize the leftmost column(j=0)
  //   dp[0][0] = 1
  //   let howManyZero = 0
  //   for (
  //     let i_endIdxOfItems = 0;
  //     i_endIdxOfItems < nums.length;
  //     i_endIdxOfItems++
  //   ) {
  //     if (nums[i_endIdxOfItems] === 0) howManyZero++
  //     dp[i_endIdxOfItems][0] = Math.pow(2, howManyZero)
  //   }

  //   // Complete the dp table
  //   for (
  //     let i_endIdxOfItems = 1;
  //     i_endIdxOfItems < nums.length;
  //     i_endIdxOfItems++
  //   ) {
  //     // Rows, traverse items
  //     const num = nums[i_endIdxOfItems]
  //     for (let j_bagSize = 1; j_bagSize <= sumOfToBePositiveGroup; j_bagSize++) {
  //       // Columns, traverse bag
  //       if (num > j_bagSize) {
  //         dp[i_endIdxOfItems][j_bagSize] = dp[i_endIdxOfItems - 1][j_bagSize]
  //       } else {
  //         dp[i_endIdxOfItems][j_bagSize] =
  //           dp[i_endIdxOfItems - 1][j_bagSize] +
  //           dp[i_endIdxOfItems - 1][j_bagSize - num]
  //       }
  //     }
  //   }

  //   return dp[nums.length - 1][sumOfToBePositiveGroup]

  // 一維解法
  let dp = new Array(sumOfToBePositiveGroup + 1).fill(0)
  // 对于dp【0】 = 1而不等于2，我的理解是，这是对left数组进行添加元素 不用考虑正负号 一个数只有两种情况 装进left或者不装进left 所以dp【0】 =1 以此去推dp【1】、dp【2】...
  dp[0] = 1

  for (let i = 0; i < nums.length; i++) {
    for (let j = sumOfToBePositiveGroup; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]]
    }
  }

  return dp[sumOfToBePositiveGroup]
}
// @lc code=end
