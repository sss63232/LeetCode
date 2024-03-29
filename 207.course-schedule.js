/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 *
 * https://leetcode.com/problems/course-schedule/description/
 *
 * algorithms
 * Medium (44.30%)
 * Likes:    5523
 * Dislikes: 227
 * Total Accepted:    562.9K
 * Total Submissions: 1.3M
 * Testcase Example:  '2\n[[1,0]]'
 *
 * There are a total of numCourses courses you have to take, labeled from 0 to
 * numCourses - 1. You are given an array prerequisites where prerequisites[i]
 * = [ai, bi] indicates that you must take course bi first if you want to take
 * course ai.
 *
 *
 * For example, the pair [0, 1], indicates that to take course 0 you have to
 * first take course 1.
 *
 *
 * Return true if you can finish all courses. Otherwise, return false.
 *
 *
 * Example 1:
 *
 *
 * Input: numCourses = 2, prerequisites = [[1,0]]
 * Output: true
 * Explanation: There are a total of 2 courses to take.
 * To take course 1 you should have finished course 0. So it is possible.
 *
 *
 * Example 2:
 *
 *
 * Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
 * Output: false
 * Explanation: There are a total of 2 courses to take.
 * To take course 1 you should have finished course 0, and to take course 0 you
 * should also have finished course 1. So it is impossible.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= numCourses <= 10^5
 * 0 <= prerequisites.length <= 5000
 * prerequisites[i].length == 2
 * 0 <= ai, bi < numCourses
 * All the pairs prerequisites[i] are unique.
 *
 *
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = function (numCourses, prerequisites) {
  const courses = new Array(numCourses).fill(0).map(() => ({
    inDegree: 0,
    nextClasses: []
  }))

  prerequisites.forEach(p => {
    courses[p[0]].inDegree++
    courses[p[1]].nextClasses.push(courses[p[0]])
  })

  let finishedCount = 0
  const queue = courses.filter(course => course.inDegree === 0)
  while (queue.length) {
    const cur = queue.shift()
    finishedCount++
    cur.nextClasses.forEach(c => {
      c.inDegree--
      if (c.inDegree === 0) {
        queue.push(c)
      }
    })
  }

  return finishedCount === numCourses
}
// @lc code=end
