// [178 · Graph Valid Tree - LintCode](https://www.lintcode.com/problem/178/description)

export class Solution {
  /**
   * validTree
   *
   * @param n: An integer
   * @param edges: a list of undirected edges
   * @return: true if it's a valid tree, or false
   */
  validTree (n, edges) {
    // Write your code here
    if (n <= 0) return false
    if (edges.length !== n - 1) return false
    if (n === 1) return true

    const neighborsOf = []
    edges.forEach(edge => {
      const [node1, node2] = edge
      neighborsOf[node1] = neighborsOf[node1] || new Set()
      neighborsOf[node1].add(node2)
      neighborsOf[node2] = neighborsOf[node2] || new Set()
      neighborsOf[node2].add(node1)
    })

    const queue = []
    neighborsOf.forEach((neighbors, idx) => {
      if (neighbors.size === 1) {
        queue.push(idx)
      }
    })

    let count = 0
    while (queue.length) {
      const cur = queue.shift()
      count++
      neighborsOf[cur].forEach(nodeKey => {
        neighborsOf[nodeKey].delete(cur)
        if (neighborsOf[nodeKey].size === 1) {
          queue.push(nodeKey)
        }
      })
    }

    return count === n
  }
}
