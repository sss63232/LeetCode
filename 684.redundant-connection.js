/*
 * @lc app=leetcode id=684 lang=javascript
 *
 * [684] Redundant Connection
 *
 * https://leetcode.com/problems/redundant-connection/description/
 *
 * algorithms
 * Medium (63.02%)
 * Likes:    6213
 * Dislikes: 404
 * Total Accepted:    382K
 * Total Submissions: 603.5K
 * Testcase Example:  '[[1,2],[1,3],[2,3]]'
 *
 * In this problem, a tree is an undirected graph that is connected and has no
 * cycles.
 *
 * You are given a graph that started as a tree with n nodes labeled from 1 to
 * n, with one additional edge added. The added edge has two different vertices
 * chosen from 1 to n, and was not an edge that already existed. The graph is
 * represented as an array edges of length n where edges[i] = [ai, bi]
 * indicates that there is an edge between nodes ai and bi in the graph.
 *
 * Return an edge that can be removed so that the resulting graph is a tree of
 * n nodes. If there are multiple answers, return the answer that occurs last
 * in the input.
 *
 *
 * Example 1:
 *
 *
 * Input: edges = [[1,2],[1,3],[2,3]]
 * Output: [2,3]
 *
 *
 * Example 2:
 *
 *
 * Input: edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]
 * Output: [1,4]
 *
 *
 *
 * Constraints:
 *
 *
 * n == edges.length
 * 3 <= n <= 1000
 * edges[i].length == 2
 * 1 <= ai < bi <= edges.length
 * ai != bi
 * There are no repeated edges.
 * The given graph is connected.
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
// 幫助函數，實現並查集（Union-Find）的功能
class UnionFind {
  constructor(size) {
    // 初始化每個節點的父節點為自己，以及秩為1
    this.rootOf = Array.from({ length: size }, (_, i) => i)
    this.rank = Array(size).fill(1)
  }

  // 找到某個節點的根節點，並進行路徑壓縮
  findRootOf(node) {
    if (this.rootOf[node] !== node) {
      this.rootOf[node] = this.findRootOf(this.rootOf[node])
    }
    return this.rootOf[node]
  }

  // 將兩個節點聯合，如果他們已經連接則返回false
  union(node1, node2) {
    let root1 = this.findRootOf(node1)
    let root2 = this.findRootOf(node2)

    if (root1 === root2) {
      return false // 如果兩個節點已經在同一集合中，表示這條邊會形成環
    }

    // 根據秩將兩個集合合併
    if (this.rank[root1] > this.rank[root2]) {
      this.rootOf[root2] = root1
    } else if (this.rank[root1] < this.rank[root2]) {
      this.rootOf[root1] = root2
    } else {
      this.rootOf[root2] = root1
      this.rank[root1] += 1
    }

    return true
  }
}

// 主函數
var findRedundantConnection = function (edges) {
  const n = edges.length
  const unionFind = new UnionFind(n + 1) // 因為節點是從1開始編號的

  for (let [u, v] of edges) {
    if (!unionFind.union(u, v)) {
      return [u, v] // 如果無法合併，則表示這條邊是多餘的
    }
  }
}
// @lc code=end
