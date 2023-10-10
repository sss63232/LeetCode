/*
 * @lc app=leetcode id=133 lang=javascript
 *
 * [133] Clone Graph
 *
 * https://leetcode.com/problems/clone-graph/description/
 *
 * algorithms
 * Medium (39.25%)
 * Likes:    2844
 * Dislikes: 1659
 * Total Accepted:    450.4K
 * Total Submissions: 1.1M
 * Testcase Example:  '[[2,4],[1,3],[2,4],[1,3]]'
 *
 * Given a reference of a node in a connected undirected graph.
 *
 * Return a deep copy (clone) of the graph.
 *
 * Each node in the graph contains a val (int) and a list (List[Node]) of its
 * neighbors.
 *
 *
 * class Node {
 * ⁠   public int val;
 * ⁠   public List<Node> neighbors;
 * }
 *
 *
 *
 *
 * Test case format:
 *
 * For simplicity sake, each node's value is the same as the node's index
 * (1-indexed). For example, the first node with val = 1, the second node with
 * val = 2, and so on. The graph is represented in the test case using an
 * adjacency list.
 *
 * Adjacency list is a collection of unordered lists used to represent a finite
 * graph. Each list describes the set of neighbors of a node in the graph.
 *
 * The given node will always be the first node with val = 1. You must return
 * the copy of the given node as a reference to the cloned graph.
 *
 *
 * Example 1:
 *
 *
 * Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
 * Output: [[2,4],[1,3],[2,4],[1,3]]
 * Explanation: There are 4 nodes in the graph.
 * 1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val =
 * 4).
 * 2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val =
 * 3).
 * 3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val =
 * 4).
 * 4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val =
 * 3).
 *
 *
 * Example 2:
 *
 *
 * Input: adjList = [[]]
 * Output: [[]]
 * Explanation: Note that the input contains one empty list. The graph consists
 * of only one node with val = 1 and it does not have any neighbors.
 *
 *
 * Example 3:
 *
 *
 * Input: adjList = []
 * Output: []
 * Explanation: This an empty graph, it does not have any nodes.
 *
 *
 * Example 4:
 *
 *
 * Input: adjList = [[2],[1]]
 * Output: [[2],[1]]
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= Node.val <= 100
 * Node.val is unique for each node.
 * Number of Nodes will not exceed 100.
 * There is no repeated edges and no self-loops in the graph.
 * The Graph is connected and all nodes can be visited starting from the given
 * node.
 *
 *
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
const cloneGraph = function (node) {
  if (!node) return node

  const cloneNodeList = []
  const processedSet = new Set()
  const processingQueue = []

  processingQueue.push(node)
  processedSet.add(node.val)
  while (processingQueue.length) {
    // clone current node
    const cur = processingQueue.shift()
    const clone = cloneNodeList[cur.val] || new Node(cur.val)
    cloneNodeList[cur.val] = clone
    // build the relationship
    cur.neighbors.forEach(neighbor => {
      const cloneNeighbor = cloneNodeList[neighbor.val] || new Node(neighbor.val)
      cloneNodeList[neighbor.val] = cloneNeighbor

      clone.neighbors.push(cloneNeighbor)

      if (!processedSet.has(neighbor.val)) {
        processingQueue.push(neighbor)
        processedSet.add(neighbor.val)
      }
    })
  }

  return cloneNodeList[node.val]

  // if (!node) return node

  // const visitedNodeVals = new Set()
  // const cloneNodesMap = new Map()

  // const queue = [node]
  // visitedNodeVals.add(node.val)
  // while (queue.length) {
  //   const cur = queue.shift()

  //   if (!cloneNodesMap.has(cur.val)) {
  //     cloneNodesMap.set(cur.val, new Node(cur.val))
  //   }

  //   const clone = cloneNodesMap.get(cur.val)

  //   cur.neighbors.forEach(n => {
  //     if (!cloneNodesMap.has(n.val)) {
  //       cloneNodesMap.set(n.val, new Node(n.val))
  //     }
  //     const nClone = cloneNodesMap.get(n.val)
  //     clone.neighbors.push(nClone)

  //     if (!visitedNodeVals.has(n.val)) {
  //       queue.push(n)
  //       visitedNodeVals.add(n.val)
  //     }
  //   })
  // }

  // return cloneNodesMap.get(node.val)
}
// @lc code=end
