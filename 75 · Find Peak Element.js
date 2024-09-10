export class Solution {
    /**
     * @param a: An integers array.
     * @return: return any of peek positions.
     */
    findPeak(a) {
        // write your code here
        let leftIdx = 0
        let rightIdx = a.length - 1
        while (rightIdx - leftIdx > 1) {
            const midIdx = leftIdx + Math.floor((rightIdx - leftIdx) / 2)

            if (a[midIdx] < a[midIdx + 1]) {
                leftIdx = midIdx
            } else if (a[midIdx] < a[midIdx - 1]) {
                rightIdx = midIdx
            } else {
                return midIdx
            }
        }

        if (a[rightIdx] > a[leftIdx]) {
            return rightIdx
        } else {
            return leftIdx
        }
    }
}