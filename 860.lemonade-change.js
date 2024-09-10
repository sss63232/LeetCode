/*
 * @lc app=leetcode id=860 lang=javascript
 *
 * [860] Lemonade Change
 *
 * https://leetcode.com/problems/lemonade-change/description/
 *
 * algorithms
 * Easy (53.57%)
 * Likes:    2866
 * Dislikes: 188
 * Total Accepted:    360.3K
 * Total Submissions: 618.1K
 * Testcase Example:  '[5,5,5,10,20]'
 *
 * At a lemonade stand, each lemonade costs $5. Customers are standing in a
 * queue to buy from you and order one at a time (in the order specified by
 * bills). Each customer will only buy one lemonade and pay with either a $5,
 * $10, or $20 bill. You must provide the correct change to each customer so
 * that the net transaction is that the customer pays $5.
 *
 * Note that you do not have any change in hand at first.
 *
 * Given an integer array bills where bills[i] is the bill the i^th customer
 * pays, return true if you can provide every customer with the correct change,
 * or false otherwise.
 *
 *
 * Example 1:
 *
 *
 * Input: bills = [5,5,5,10,20]
 * Output: true
 * Explanation:
 * From the first 3 customers, we collect three $5 bills in order.
 * From the fourth customer, we collect a $10 bill and give back a $5.
 * From the fifth customer, we give a $10 bill and a $5 bill.
 * Since all customers got correct change, we output true.
 *
 *
 * Example 2:
 *
 *
 * Input: bills = [5,5,10,10,20]
 * Output: false
 * Explanation:
 * From the first two customers in order, we collect two $5 bills.
 * For the next two customers in order, we collect a $10 bill and give back a
 * $5 bill.
 * For the last customer, we can not give the change of $15 back because we
 * only have two $10 bills.
 * Since not every customer received the correct change, the answer is
 * false.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= bills.length <= 10^5
 * bills[i] is either 5, 10, or 20.
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  if (bills[0] !== 5) return false

  let fiveCount = 0
  let tenCount = 0
  for (let i = 0; i < bills.length; i++) {
    switch (bills[i]) {
      case 5: {
        fiveCount++
        break
      }
      case 10: {
        if (!fiveCount) return false

        tenCount++
        fiveCount--
        break
      }
      case 20: {
        if (!fiveCount) return false

        if (fiveCount > 0 && tenCount > 0) {
          fiveCount--
          tenCount--
        } else if (fiveCount >= 3) {
          fiveCount -= 3
        } else {
          return false
        }
        break
      }
    }
  }

  return true
}
// @lc code=end
