export class Solution {
  /**
   * @param start: a string - 起始單詞
   * @param end: a string - 結束單詞
   * @param dict: a set of string - 單詞字典
   * @return: a list of lists of string - 所有最短轉換序列
   */
  findLadders(start, end, dict) {
    const ladders = [] // 用於存儲所有最短轉換序列
    const wordExpansionMap = new Map() // 映射每個單詞到它可以通過一步轉換而來的單詞列表
    const distance = new Map() // 存儲每個單詞與起點單詞之間的最短距離

    dict.add(start) // 將起始單詞添加到字典中
    dict.add(end) // 將結束單詞添加到字典中

    // 廣度優先搜索 (BFS) 用於構建單詞之間的映射以及從起點到各個單詞的距離
    const bfsToSetupExpansionAndDistance = (starterWord) => {
      const queue = []
      queue.push(starterWord) // 將起始單詞放入隊列
      distance.set(starterWord, 0) // 設置起始單詞的距離為 0

      for (const word of dict) {
        wordExpansionMap.set(word, []) // 初始化每個單詞的映射為一個空列表
      }

      // 開始 BFS 搜索
      while (queue.length) {
        const cur = queue.shift() // 取出隊列中的第一個單詞
        const neighborList = getCandidatesFromDict(cur) // 擴展當前單詞的所有可能的下一步單詞

        for (const neighborWord of neighborList) {
          wordExpansionMap.get(neighborWord).push(cur) // 將當前單詞添加到下一步單詞的前置單詞列表中
          if (!distance.has(neighborWord)) {
            // 如果該單詞尚未設置距離
            distance.set(neighborWord, distance.get(cur) + 1) // 設置距離為當前單詞的距離加 1
            queue.push(neighborWord) // 將該單詞放入隊列繼續 BFS
          }
        }
      }
    }

    // 深度優先搜索 (DFS) 用於從起始單詞到終點單詞構建路徑
    const dfs = (ladders, path, curr, end) => {
      path.push(curr) // 將當前單詞添加到路徑中

      if (curr === end) {
        ladders.push([...path]) // 如果到達終點單詞，保存當前路徑
      } else {
        for (const next of wordExpansionMap.get(curr) || []) {
          // 遍歷當前單詞的前置單詞
          if (distance.get(curr) === distance.get(next) + 1) {
            // 確保路徑按正確的距離進行
            dfs(ladders, path, next, end) // 遞歸地繼續 DFS
          }
        }
      }

      path.pop() // 回溯時移除當前單詞
    }

    // 擴展當前單詞的所有可能的下一步單詞
    const ALPHABET = "abcdefghijklmnopqrstuvwxyz"
    const getCandidatesFromDict = (sourceWord) => {
      const expansion = []

      for (let i = 0; i < sourceWord.length; i++) {
        for (let j = 0; j < 26; j++) {
          // 從 'a' 到 'z'
          // 替換單詞中的第 i 個字符
          const expanded =
            sourceWord.slice(0, i) + ALPHABET[j] + sourceWord.slice(i + 1)
          if (expanded !== sourceWord && dict.has(expanded)) {
            // 如果替換後單詞存在於字典中且與原單詞不同
            expansion.push(expanded) // 將該單詞添加到擴展列表中
          }
        }
      }

      return expansion
    }

    bfsToSetupExpansionAndDistance(end) // 執行 BFS，構建距離和映射關係
    console.log("TCL=> ~ Solution ~ findLadders ~ map:", wordExpansionMap)
    console.log("TCL=> ~ Solution ~ findLadders ~ distance:", distance)

    const path = [] // 用於存儲當前的路徑
    dfs(ladders, path, start, end, distance, wordExpansionMap) // 執行 DFS，找到所有最短路徑

    return ladders // 返回所有的最短路徑序列
  }
}
