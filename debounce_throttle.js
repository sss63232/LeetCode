const debounce = (fn, delay) => {
  let timerId = null

  return (...args) => {
    if (timerId) {
      clearTimeout(timerId)
      timerId = null
    }

    timerId = setTimeout(() => {
      fn(...args)
      timerId = null
    }, delay)
  }
}

const say = sth => {
  console.log(sth)
}

const debounedSay = debounce(say, 1)
debounedSay('hi')
debounedSay('hi')
debounedSay('hi')
debounedSay('hi')
debounedSay('hi')
debounedSay('hi')
debounedSay('hi')
debounedSay('hi')
debounedSay('hi')
debounedSay('hi')
debounedSay('hi')

const throttle = (fn, delay) => {
  let timerId = null

  return (...args) => {
    if (timerId) return

    timerId = setTimeout(() => {
      fn(...args)
      clearTimeout(timerId)
    }, delay)
  }
}

// https://juejin.cn/post/7003123145649422349
