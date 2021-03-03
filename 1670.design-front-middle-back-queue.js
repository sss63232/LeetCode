/*
 * @lc app=leetcode id=1670 lang=javascript
 *
 * [1670] Design Front Middle Back Queue
 *
 * https://leetcode.com/problems/design-front-middle-back-queue/description/
 *
 * algorithms
 * Medium (54.44%)
 * Likes:    150
 * Dislikes: 34
 * Total Accepted:    6.3K
 * Total Submissions: 11.6K
 * Testcase Example:  '["FrontMiddleBackQueue","pushFront","pushBack","pushMiddle","pushMiddle","popFront","popMiddle","popMiddle","popBack","popFront"]\n[[],[1],[2],[3],[4],[],[],[],[],[]]'
 *
 * Design a queue that supports push and pop operations in the front, middle,
 * and back.
 *
 * Implement the FrontMiddleBack class:
 *
 *
 * FrontMiddleBack() Initializes the queue.
 * void pushFront(int val) Adds val to the front of the queue.
 * void pushMiddle(int val) Adds val to the middle of the queue.
 * void pushBack(int val) Adds val to the back of the queue.
 * int popFront() Removes the front element of the queue and returns it. If the
 * queue is empty, return -1.
 * int popMiddle() Removes the middle element of the queue and returns it. If
 * the queue is empty, return -1.
 * int popBack() Removes the back element of the queue and returns it. If the
 * queue is empty, return -1.
 *
 *
 * Notice that when there are two middle position choices, the operation is
 * performed on the frontmost middle position choice. For example:
 *
 *
 * Pushing 6 into the middle of [1, 2, 3, 4, 5] results in [1, 2, 6, 3, 4,
 * 5].
 * Popping the middle from [1, 2, 3, 4, 5, 6] returns 3 and results in [1, 2,
 * 4, 5, 6].
 *
 *
 *
 * Example 1:
 *
 *
 * Input:
 * ["FrontMiddleBackQueue", "pushFront", "pushBack", "pushMiddle",
 * "pushMiddle", "popFront", "popMiddle", "popMiddle", "popBack", "popFront"]
 * [[], [1], [2], [3], [4], [], [], [], [], []]
 * Output:
 * [null, null, null, null, null, 1, 3, 4, 2, -1]
 *
 * Explanation:
 * FrontMiddleBackQueue q = new FrontMiddleBackQueue();
 * q.pushFront(1);   // [1]
 * q.pushBack(2);    // [1, 2]
 * q.pushMiddle(3);  // [1, 3, 2]
 * q.pushMiddle(4);  // [1, 4, 3, 2]
 * q.popFront();     // return 1 -> [4, 3, 2]
 * q.popMiddle();    // return 3 -> [4, 2]
 * q.popMiddle();    // return 4 -> [2]
 * q.popBack();      // return 2 -> []
 * q.popFront();     // return -1 -> [] (The queue is empty)
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= val <= 10^9
 * At most 1000 calls will be made to pushFront, pushMiddle, pushBack,
 * popFront, popMiddle, and popBack.
 *
 *
 */

// @lc code=start

const FrontMiddleBackQueue = function () {
  this.queue = []
}

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function (val) {
  if (!val) return
  this.queue.unshift(val)
}

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function (val) {
  if (!val) return
  const length = this.queue.length
  const middleIdx = Math.floor(length / 2)
  this.queue.splice(middleIdx, 0, val)
}

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function (val) {
  if (!val) return

  this.queue.push(val)
}

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function () {
  return this.queue.shift() || -1
}

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function () {
  const length = this.queue.length
  if (length === 0) {
    return -1
  }

  const isLengthEven = length % 2 === 0

  const divisionBy2 = Math.floor(length / 2)
  const middleIdx = isLengthEven ? divisionBy2 - 1 : divisionBy2

  const [middle = -1] = this.queue.splice(middleIdx, 1)
  return middle
}

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function () {
  return this.queue.pop() || -1
}

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */
// @lc code=end
