const villagePeople = [
  [1, 2, 3],
  [2, 4, 5],
  [8, 19, 3]
]

class Person {
  constructor(ids) {
    this.id = ids[0]
    this.parents = ids.slice(1)
  }
}

const parentsList = []
villagePeople.forEach(kin => {
  parentsList[kin[0]] = kin.slice(1)
})

const hasSameAncestor = (id1, id2) => {
  if (id1 === id2) return true

  const ancestors1 = new Set([id1])

  const queue1 = [id1]
  while (queue1.length) {
    const curId = queue1.shift()
    const curParents = parentsList[curId]
    curParents && curParents.forEach(parentId => {
      ancestors1.add(parentId)
      queue1.push(parentId)
    })
  }

  const queue2 = [id2]
  while (queue2.length) {
    const curId = queue2.shift()
    if (ancestors1.has(curId)) {
      return true
    }

    const curParents = parentsList[curId]
    curParents && curParents.forEach(parentId => {
      queue2.push(parentId)
    })
  }

  return false
}
