// 1. The Mex Game
// A new game is launched in HackerGames where the player is given an array of n of integers arr and is allowed to reduce any element arr[i] to an integer x such that 0 ≤ x≤ arr[i].
// The MEX of an array is defined as the minimum non-negative element not present in the array. For example, MEX of [1, 0, 3, 2, 5] is 4 and MEX of [1, 2] is 0.
// Find the maximum possible MEX of the array arr that can be achieved by performing the operation any number of times.
//
// Example:
// Consider, n = 3, arr = [3, 2, 3].
// One optimal set of operations follows.
// • Reduce arr[O]to 0
// • Reduce arr[1]to 1
// • Reduce arr[2]to 2
// Now, arr= [0, 1, 2], and its MEX is 3, which is the maximum possible MEX. Return 3.
//
// Function Description:
// Complete the function getMaximumMEX in the below.
// getMaximumMEX has the following parameter:
// int arr[n]: an array of integers
// Returns
// int: the maximum possible MEX of the array
// Constraints
// • 1 ≤ n ≤ 10^5
// • 0 ≤ arr[i] ≤ n
function getMaximumMEX(arr) {
  // Step 1: Sort the array in non-decreasing order
  arr.sort((a, b) => a - b)

  // Step 2: Initialize MEX to 0
  let mex = 0

  // Step 3: Traverse the sorted array
  for (let i = 0; i < arr.length; i++) {
    // If the current element is greater than or equal to MEX,
    // we can "use" it to extend the MEX
    if (arr[i] >= mex) {
      mex++ // Increase the MEX
    }
  }

  // Step 4: Return the maximum possible MEX
  return mex
}

// Example usage:
console.log(getMaximumMEX([3, 2, 3])) // Output: 3
console.log(getMaximumMEX([1, 1, 1])) // Output: 2
console.log(getMaximumMEX([0, 0, 1, 1, 1])) // Output: 2
// console.log(getMaximumMEX([0, 2, 2])) // should output: 3
// console.log(getMaximumMEX([3, 2, 3])) // should output: 3
// console.log(getMaximumMEX([1, 0, 3, 2, 5])) // should output: 5
// console.log(getMaximumMEX([1, 2])) // should output: 2
