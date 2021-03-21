/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function (lists) {
  if (lists.length === 0) {
    return null
  }

  const _gatherVals = (acc, cur) => {
    while (cur) {
      acc.push(cur.val)
      cur = cur.next
    }
    return acc
  }

  return lists
    .reduce(_gatherVals, [])
    .sort((a, b) => a - b)
    .reduceRight((acc, cur) => new ListNode(cur, acc)
      , null)
}
