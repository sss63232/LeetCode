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
  // if (lists.length === 0) {
  //   return null
  // }

  // const _gatherVals = (acc, cur) => {
  //   while (cur) {
  //     acc.push(cur.val)
  //     cur = cur.next
  //   }
  //   return acc
  // }

  // return lists
  //   .reduce(_gatherVals, [])
  //   .sort((a, b) => a - b)
  //   .reduceRight((acc, cur) => new ListNode(cur, acc)
  //     , null)

  if (lists.length === 0) return null
  if (lists.length === 1) return lists[0]

  const _mergeTwoList = (list1, list2) => {
    const dummyHead = new ListNode()

    let pre = dummyHead
    while (list1 && list2) {
      if (list1.val > list2.val) {
        pre.next = list2
        list2 = list2.next
      } else {
        pre.next = list1
        list1 = list1.next
      }

      pre = pre.next
    }

    pre.next = list1 || list2
    return dummyHead.next
  }

  while (lists.length >= 2) {
    lists.splice(0, 2, _mergeTwoList(lists[0], lists[1]))
  }

  return lists[0]
}
