const lodashGet = (obj, str) => {
  const keys = str.split('.').reduce((acc, cur) => {
    const parsedKeys = cur.includes('[')
      ? cur.split('').filter(char => char !== '[' && char !== ']')
      : [cur]

    return acc.concat(parsedKeys)
  }, [])

  let value = obj
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    value = value[key]
  }

  return value
}

const testingObj = { a: { b: { c: [0, 1, 2], d: 'D' } } }

const result1 = lodashGet(testingObj, 'a.b.c')
console.log('=> ~ result1', result1)
const result2 = lodashGet(testingObj, 'a.b.c[0]')
console.log('=> ~ result2', result2)
