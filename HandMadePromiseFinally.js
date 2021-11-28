class HandMadePromise {}

HandMadePromise.prototype.finally = function (onFinally) {
  return this.then(
    value => HandMadePromise.resolve(onFinally()).then(() => value),
    error =>
      HandMadePromise.resolve(onFinally).then(() => {
        throw error
      })
  )
}
