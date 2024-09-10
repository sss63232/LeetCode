/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 *
 * https://leetcode.com/problems/course-schedule/description/
 *
 * algorithms
 * Medium (46.97%)
 * Likes:    16085
 * Dislikes: 705
 * Total Accepted:    1.6M
 * Total Submissions: 3.4M
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
 * 1 <= numCourses <= 2000
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
var canFinish = function(numCourses, prerequisites) {
    const courseMap = new Map()
    for(let i=0; i<numCourses; i++){
        courseMap.set(i, { inDegree: 0, nextClass: []})
    }

    prerequisites.forEach(([a, b])=>{
        const courseA = courseMap.get(a)
        courseA.inDegree++
        
        courseMap.get(b).nextClass.push(courseA)
    })

    const queue = []
    for(const[key, value] of courseMap){
        if(value.inDegree===0){
            queue.push(value)
        }
    }

    let times = 0 
    while(queue.length){
        const completedCourse = queue.shift()
        times++

        completedCourse.nextClass.forEach(course => {
            course.inDegree --
            if(course.inDegree === 0 ){
                queue.push(course)
            }
        })
    }

    return times === numCourses

};
// @lc code=end

