const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class HandMadePromise {
  constructor (executor) {
    this.state = PENDING
    this.value = undefined
    this.reason = undefined

    this.onResolvedCallbacks = []
    this.onRejectedCallbacks = []

    try {
      executor(this.resolve, this.reject)
    } catch (error) {
      this.reject(error)
    }
  }

  resolve = value => {
    if (this.state === PENDING) {
      this.state = FULFILLED
      this.value = value

      this.onResolvedCallbacks &&
        this.onResolvedCallbacks.forEach(fn => fn(value))
    }
  }

  reject = reason => {
    if (this.state === PENDING) {
      this.state = REJECTED
      this.reason = reason

      this.onRejectedCallbacks &&
        this.onRejectedCallbacks.forEach(fn => fn(reason))
    }
  }

  then = (onFulfilled, onRejected) => {
    if (this.state === FULFILLED) {
      onFulfilled(this.value)
    }

    if (this.state === REJECTED) {
      onRejected(this.reason)
    }

    if (this.state === PENDING) {
      this.onResolvedCallbacks.push(onFulfilled)
      this.onRejectedCallbacks.push(onRejected)
    }
  }
}
