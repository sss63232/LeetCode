const HandMadePromiseAllSettled = promiseList => {
  promiseList = promiseList.map(item =>
    item instanceof Promise ? item : Promise.resolve(item)
  )

  return new Promise((resolve, reject) => {
    const allResults = []
    let unsettledCount = promiseList.length

    promiseList.forEach((p, idx) => {
      p.then(
        value => {
          allResults[idx] = { status: 'fulfilled', value }
          unsettledCount--
          if (unsettledCount === 0) {
            resolve(allResults)
          }
        },
        reason => {
          allResults[idx] = { status: 'rejected', reason }
          unsettledCount--
          if (unsettledCount === 0) {
            resolve(allResults)
          }
        }
      )
    })
  })
}
