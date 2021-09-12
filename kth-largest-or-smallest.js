// Find the k'th Largest or Smallest Element

/**
 * @param {Array<number>} arr
 * @param {number} k
 * @return {number}
 */
const kthLargest = (arr, k) => {
  const n = arr.length
  let left = 0
  let right = n - 1

  while (left <= right) {
    const chosenPivotIndex = getRandomInt(left, right)

    const finalIndexOfChosenPivot = partition(arr, left, right, chosenPivotIndex)
    // What does the 'finalIndexOfChosenPivot' tell us?

    if (finalIndexOfChosenPivot === n - k) {
      /*
           * Found. The pivot is index on index n - k. This is literally its final
           * position if the array we were given had been sorted. See how we saved work?
           * We don't need to sort the whole array
           */
      return arr[finalIndexOfChosenPivot]
    } else if (finalIndexOfChosenPivot > n - k) {
      /*
           * k'th largest must be in the left partition. We "overshot" and need to go left
           * (and we do this by narrowing the right bound)
           */
      right = finalIndexOfChosenPivot - 1
    } else {
      /*
           * finalIndexOfChoosenPivot < n - k
           *
           * k'th largest must be in the right partition. We "undershot" and need to go
           * right (and we do this by narrowing the left bound)
           */
      left = finalIndexOfChosenPivot + 1
    }
  }

  return -1
}

const partition = (arr, left, right, pivotIndex) => {
  const pivotValue = arr[pivotIndex]
  let lesserItemsTailIndex = left

  /*
       * Move the item at the 'pivotIndex' OUT OF THE WAY. We are about to bulldoze
       * through the partitioning space and we don't want it in the way
       */

  swap(arr, pivotIndex, right)

  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, lesserItemsTailIndex)
      lesserItemsTailIndex++
    }
  }
  /*
       * Ok...partitioning is done. Swap the pivot item BACK into the space we just
       * partitioned at the 'lesserItemsTailIndex'...that's where the pivot item
       * belongs
       *
       * In the middle of the "sandwich".
       */

  swap(arr, right, lesserItemsTailIndex)

  return lesserItemsTailIndex
}

const swap = (arr, first, second) => {
  const temp = arr[first]
  arr[first] = arr[second]
  arr[second] = temp
}

// Inclusive of both bounds
const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min + 1)) + min
}

/// //////////////////////////////////////////////////////////////////////////////////
// my implementation

/**
 * @param {Array<number>} arr
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (arr, k) => {
  const n = arr.length
  if (n === 1) return arr[0]

  const _swap = (numbers, idx1, idx2) => {
    const tmp = numbers[idx1]
    numbers[idx1] = numbers[idx2]
    numbers[idx2] = tmp
  }

  const _partition = (numbers, startIdx, endIdx) => {
    const pivotValue = numbers[endIdx]

    let lesserItemsTailIdx = startIdx
    for (let i = startIdx; i < endIdx; i++) {
      if (numbers[i] < pivotValue) {
        _swap(numbers, i, lesserItemsTailIdx)
        lesserItemsTailIdx++
      }
    }

    _swap(numbers, endIdx, lesserItemsTailIdx)
    return lesserItemsTailIdx
  }

  const targetIdx = n - k

  let left = 0
  let right = n - 1
  while (left <= right) {
    const pivotIdx = _partition(arr, left, right)
    if (pivotIdx === targetIdx) return arr[pivotIdx]
    if (targetIdx > pivotIdx) {
      left = pivotIdx + 1
    } else {
      right = pivotIdx - 1
    }
  }
}
