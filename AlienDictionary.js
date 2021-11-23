// https://www.lintcode.com/problem/892/
class Solution {
  /**
   * alienOrder
   *
   * @param words: a list of words
   * @return: a string which is correct order
   */
  alienOrder (words) {
    // Write your code here
    /* 
    {
      a: {
        inbound: 0,
        next:[b, c]
      }
    }
    */

    const _buildGraph = () => {
      const graph = {}

      for (let i = 0; i < words.length - 1; i++) {
        const word = words[i]
        const nextWord = words[i + 1]

        const minLength = Math.min(word.length, nextWord.length)
        for (let j = 0; j < minLength; j++) {
          const char = word[j]
          const charInNext = nextWord[j]
          if (char !== charInNext) {
            graph[char] = graph[char] || { inbound: 0, next: [] }
            graph[char].next.push(charInNext)

            graph[charInNext] = graph[charInNext] || { inbound: 0, next: [] }
            graph[charInNext].inbound++
            break
          }
        }
      }

      return graph
    }

    const graph = _buildGraph()
    console.log('TCL=> ~ alienOrder ~ graph', JSON.stringify(graph))

    let result = ''
    const queue = []
    Object.keys(graph).forEach(key => {
      const node = graph[key]
      if (node.inbound === 0) {
        queue.push(key)
      }
    })

    while (queue.length) {
      const cur = queue.shift()
      result += cur
      graph[cur].next.forEach(key => {
        graph[key].inbound--
        if (graph[key].inbound === 0) {
          queue.push(key)
        }
      })
    }

    return result
  }
}

const solution = new Solution()
const result = solution.alienOrder(['wrt', 'wrf', 'er', 'ett', 'rftt'])
console.log('TCL=> ~ result', result)
