const testingObj = {
  name: 'Alice',
  obj: {
    name: 'Bill',
    obj: {
      sth: 'asdf',
      word: 'apple'
    }
  },
  list: [1, 2, 4]
}

const deepClone = target => {
  const clone = Array.isArray(target) ? [] : {}
  Object.keys(target).forEach(key => {
    const value = target[key]
    clone[key] = typeof value === 'object' ? deepClone(value) : value
  })

  return clone
}

const clone = deepClone(testingObj)
console.log('TCL=> ~ clone', JSON.stringify(clone))
console.log(clone.obj !== testingObj.obj)
