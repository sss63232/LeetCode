const handMadePromiseAll = promiseList => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      throw new TypeError('promises must be an array')
    }

    const allResults = []
    let finishedCount = 0
    promiseList.forEach((p, idx) => {
      p.then(result => {
        allResults[idx] = result
        finishedCount++
        if (finishedCount === promiseList.length) {
          resolve(allResults)
        }
      }).catch(err => reject(err))
    })
  })
}
