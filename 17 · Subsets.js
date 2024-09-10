// https://www.lintcode.com/problem/17/description

export class Solution {
  /**
   * @param nums: A set of numbers
   * @return: A list of lists
   *          we will sort your return value in output
   */
  subsets(nums) {
    // write your code here
    if (!nums || !nums.length) return [[]]
    if (nums.length === 1) return [[], nums]

    const results = []
    nums.sort((a, b) => a - b)
    const _dfs = (currentPath, level) => {
      if (level === nums.length) {
        results.push(currentPath)
        return
      }

      const nextLevel = level + 1
      _dfs([...currentPath, nums[level]], nextLevel)
      _dfs([...currentPath], nextLevel)
    }

    _dfs([], 0)
    return results
  }
}
