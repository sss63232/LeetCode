const transform = obj => {
  const result = {}

  const _buildObjectTree = keyListString => {
    const finalFieldValue = obj[keyListString]

    let curCxt = result
    const keyList = keyListString.split('.')
    keyList.forEach((key, idx) => {
      if (idx === keyList.length - 1) {
        curCxt[key] = finalFieldValue
      } else {
        curCxt[key] = curCxt[key] || {}
      }

      curCxt = curCxt[key]
    })
  }

  Object.keys(obj).forEach(_buildObjectTree)

  return result
}

const ans = transform({
  A: 1,
  'B.A': 2,
  'B.B': 4,
  'C.D.E': 3,
  'C.D.F': 5
})

console.log(JSON.stringify(ans))
