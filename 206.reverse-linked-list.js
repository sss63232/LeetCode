/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 *
 * https://leetcode.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (76.90%)
 * Likes:    21558
 * Dislikes: 439
 * Total Accepted:    4.3M
 * Total Submissions: 5.6M
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * Given the head of a singly linked list, reverse the list, and return the
 * reversed list.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: head = [1,2,3,4,5]
 * Output: [5,4,3,2,1]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: head = [1,2]
 * Output: [2,1]
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: head = []
 * Output: []
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * The number of nodes in the list is the range [0, 5000].
 * -5000 <= Node.val <= 5000
 * 
 * 
 * 
 * Follow up: A linked list can be reversed either iteratively or recursively.
 * Could you implement both?
 * 
 */

// @lc code=start
// 謝謝你提供這個問題和解答。這是 LeetCode 上的第 206 題 "Reverse Linked List"，是一個常見且重要的鏈表操作問題。這個解答提供了三種不同的方法來反轉鏈表，我來為你解釋一下每種方法：

// 1. 迭代方法（Ans. 1）：
//    這是最常見的解法，使用三個指針（pre, cur, then）來迭代地反轉鏈表。
//    時間複雜度：O(n)，空間複雜度：O(1)

// 2. 遞迴方法（Ans. 2）：
//    這種方法使用遞迴來反轉鏈表。每次遞迴都將當前節點的 next 指向前一個節點。
//    時間複雜度：O(n)，空間複雜度：O(n)（因為遞迴調用棧的空間）

// 3. 遞迴方法（返回頭尾節點）（Ans. 3）：
//    這是一種更複雜的遞迴方法，每次遞迴都返回反轉後的頭節點和尾節點。
//    時間複雜度：O(n)，空間複雜度：O(n)

// 這三種方法都能正確地解決問題，但各有其特點：

// - 方法 1 最直觀，也是面試中最常見的解法。
// - 方法 2 展示了如何用遞迴解決這個問題，但在實際應用中可能會有棧溢出的風險。
// - 方法 3 是一種更靈活的遞迴方法，雖然代碼較長，但在某些情況下（例如需要同時知道反轉後的頭尾節點）可能會更有用。

// 你想要我詳細解釋其中的某一種方法嗎？或者你對這個問題還有其他疑問嗎？


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    //// Ans. 1
    // let pre = null
    // let cur = head
    // while(cur){
    //     const then = cur.next
    //     cur.next = pre

    //     pre = cur
    //     cur = then
    // }

    // return pre

    // // Ans. 2 
    // const recursivelyReverse = (pre, cur) => {
    //     if(!cur) return pre

    //     const then = cur.next
    //     cur.next = pre
    //     return recursivelyReverse(cur, then)
    // }

    // return recursivelyReverse(null, head)

    // Ans. 3 
    // interface Result {
    //     head: null | ListNode;
    //     tail: null | ListNode; 
    // }
    const getReversedHeadAndTail = (node) => {
        if(!node || !node.next){
            return {
                head: node,
                tail: node
            }
        }

        const nextResult = getReversedHeadAndTail(node.next)
        nextResult.tail.next = node
        node.next = null
        return {
            head: nextResult.head,
            tail: node
        }
    }

    return getReversedHeadAndTail(head).head
};
// @lc code=end

