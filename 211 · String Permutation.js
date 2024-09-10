export class Solution {
  /**
   * @param a: a string
   * @param b: a string
   * @return: a boolean
   */
  permutation(a, b) {
    // write your code here
    if (a.length !== b.length) return false

    const charListOfA = a.split("")
    const charListOfB = b.split("")

    for (let i = 0; i < charListOfA.length; i++) {
      const char = charListOfA[i]
      const charIdxInB = charListOfB.indexOf(char)
      if (charIdxInB === -1) {
        return false
      } else {
        charListOfB.splice(charIdxInB, 1)
      }
    }

    return charListOfB.length === 0
  }
}
