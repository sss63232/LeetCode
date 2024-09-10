// 2. File Protection
// There are n files stored in a system, where the size of the ith file is fileSizeli]. To protect the files from getting hacked, the minimum size of the ith file should be minSize[i].
// All files must be protected. To do so, the contents of some files can be transferred to another such that the total number of bytes remain the same. Find the minimum number of files whose size must be changed such that all files become protected. If it is not possible to protect all the files, return -1.
// Example
// 2, 2, 1, 4].
// Consider n = 5, fileSize = [4, 1, 5, 2, 3], minSize = [3,
// Considering 1-based indexing, 2 bytes from file 3 can be transferred 1 each to the second and last
// file, then fileSize = [4, 2, 3, 2, 4]. Now, for each i,
// fileSizelil ≥ minSizeli], so all files are protected. The minimum number of files whose sizes must be changed is 3.
// Function Description
// Complete the function getMinimumChanges in the editor below.
// getMinimumChanges has the following parameters: int fileSize[n]: the initial sizes of each file int minSize[n]: the minimum required size to protect the file
// Returns:
// int: the minimum number of files whose size needs to be changed to protect all the files
// Constraints
// • 1≤n≤2 * 105
// • 1 ≤ fileSizeli], minSize[i] ≤ 10°

function getMinimumChanges(fileSize, minSize) {
  const howManyFiles = fileSize.length
  let totalFileSize = 0
  let totalMinSize = 0

  let surplusList = []
  let deficitSum = 0
  let changedFilesCount = 0 // 用來計算檔案數量

  // 步驟1：計算總檔案大小與總最小需求
  for (let i = 0; i < howManyFiles; i++) {
    totalFileSize += fileSize[i]
    totalMinSize += minSize[i]

    // 計算多餘與不足的位元組
    if (fileSize[i] > minSize[i]) {
      surplusList.push(fileSize[i] - minSize[i]) // 多餘位元組存入陣列
    } else if (fileSize[i] < minSize[i]) {
      deficitSum += minSize[i] - fileSize[i] // 累計欠缺的位元組數
      changedFilesCount++ // 欠缺的檔案必須被改變
    }
  }

  // 步驟2：檢查是否可以保護所有檔案
  if (totalFileSize < totalMinSize) {
    return -1 // 無法達到保護目標
  }

  // 步驟3：將多餘的位元組分配給欠缺的檔案
  surplusList.sort((a, b) => b - a) // 將多餘的位元組從大到小排序，最大化分配效率

  let usedSurplus = 0

  for (let i = 0; i < surplusList.length; i++) {
    if (usedSurplus >= deficitSum) break // 如果多餘的位元組已經足夠覆蓋欠缺，停止分配
    usedSurplus += surplusList[i] // 累計已使用的多餘位元組
    changedFilesCount++ // 計算給出多餘位元組的檔案數量
  }

  // 步驟4：返回總共需要更改的檔案數
  return changedFilesCount
}

// 範例使用：
console.log(getMinimumChanges([4, 1, 5, 2, 3], [3, 2, 2, 1, 4])) // 輸出: 3
console.log(getMinimumChanges([6, 2, 1], [5, 3, 1])) // 輸出: 2
console.log(getMinimumChanges([6, 2, 1], [1, 1, 1])) // 輸出: 0
console.log(getMinimumChanges([4, 1, 2], [5, 3, 2])) // 輸出: -1
console.log(getMinimumChanges([3, 3, 3], [2, 3, 4])) // 輸出: 2
console.log(getMinimumChanges([5, 7, 3], [4, 6, 5])) // 輸出: 3
