export class Solution {
  /**
   * @param a: A list of integers
   * @return: A boolean
   */
  canJump(a) {
    if(a.length===1) return true
    let rightMost = 0
    for(let i=0; i<a.length; i++){
      rightMost = Math.max(rightMost, i+a[i])
      if(rightMost >= a.length-1) return true
      if(rightMost < i+1) return false
    }

    return false
  }
}