/*
 * @lc app=leetcode id=25 lang=javascript
 *
 * [25] Reverse Nodes in k-Group
 *
 * https://leetcode.com/problems/reverse-nodes-in-k-group/description/
 *
 * algorithms
 * Hard (59.24%)
 * Likes:    13698
 * Dislikes: 699
 * Total Accepted:    979.5K
 * Total Submissions: 1.6M
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * Given the head of a linked list, reverse the nodes of the list k at a time,
 * and return the modified list.
 * 
 * k is a positive integer and is less than or equal to the length of the
 * linked list. If the number of nodes is not a multiple of k then left-out
 * nodes, in the end, should remain as it is.
 * 
 * You may not alter the values in the list's nodes, only nodes themselves may
 * be changed.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: head = [1,2,3,4,5], k = 2
 * Output: [2,1,4,3,5]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: head = [1,2,3,4,5], k = 3
 * Output: [3,2,1,4,5]
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * The number of nodes in the list is n.
 * 1 <= k <= n <= 5000
 * 0 <= Node.val <= 1000
 * 
 * 
 * 
 * Follow-up: Can you solve the problem in O(1) extra memory space?
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (!head || k === 1) return head;

    const dummy = new ListNode(0);
    dummy.next = head;
    let theNodeBeforeReverseRegion = dummy;
    let cur = head

    while (cur) {
        let toBeReversedRegionTail = theNodeBeforeReverseRegion;
        // 檢查是否還有 k 個節點
        for (let i = 0; i < k; i++) {
            toBeReversedRegionTail = toBeReversedRegionTail.next;
            if (!toBeReversedRegionTail) return dummy.next;
        }

        let theNodeAfterReverseRegion = toBeReversedRegionTail.next;
        const reversedList = getReversedList(cur, toBeReversedRegionTail);
        
        // 連接反轉後的部分
        theNodeBeforeReverseRegion.next = reversedList.head;
        reversedList.tail.next = theNodeAfterReverseRegion;

        // prepare for next round
        theNodeBeforeReverseRegion = reversedList.tail;
        cur = theNodeAfterReverseRegion
    }

    return dummy.next;
};

// 輔助函數：反轉鏈表的一部分
function getReversedList(reverseStart, reverseEnd) {
    let theNodeAfterReverseEnd = reverseEnd.next

    let pre = theNodeAfterReverseEnd
    let cur = reverseStart
    // cur 會一路往後走 -> reverseEnd -> reverseEnd.next
    while(cur !== theNodeAfterReverseEnd){
        const then = cur.next
        cur.next = pre

        // prepare for next round
        pre = cur
        cur = then
    }

    // head,tail 跟一開始相反
    return {
        head: reverseEnd,
        tail: reverseStart
    };
}
// @lc code=end

