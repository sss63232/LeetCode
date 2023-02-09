class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  append(element) {
    const node = new Node(element)

    if (!this.head) {
      this.head = node
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }

    this.length++
  }

  insert(element, positionIdx) {
    if (positionIdx < 0 || positionIdx > this.length) {
      return false
    }

    const node = new Node(element)
    let current = this.head
    if (positionIdx === 0) {
      this.head = node
      this.head.next = current
    } else {
      let previous = null
      while (positionIdx) {
        previous = current
        current = current.next
        positionIdx--
      }
      previous.next = node
      node.next = current
    }

    this.length++
    return true
  }

  indexOf(element) {
    let index = 0
    let current = this.head
    while (current) {
      if (current.element === element) {
        return index
      }
      current = current.next
      index++
    }

    return -1
  }

  removeAt(positionIdx) {
    if (positionIdx < 0 || positionIdx >= this.length) {
      return null
    }

    let current = this.head
    if (positionIdx === 0) {
      this.head = current.next
    } else {
      let previous = null
      while (positionIdx) {
        previous = current
        current = current.next
        positionIdx--
      }
      previous.next = current.next
    }
    this.length--
    return current
  }

  remove(element) {
    return this.removeAt(this.indexOf(element))
  }

  toString() {
    let result = ""

    let currentNode = this.head
    while (currentNode) {
      result += `${currentNode.element},`
      currentNode = currentNode.next
    }

    return result
  }
}

const list = new LinkedList()
list.append(0)
list.append(1)
list.append(2)
list.append(3)
console.log("TCL=> ~ list", list.toString())
console.log("TCL=> ~ list.length", list.length)
list.insert(999, 2)
list.insert(1000, 2)
console.log("TCL=> ~ list", list.toString())
console.log("TCL=> ~ list.length", list.length)
list.indexOf(999)
console.log("TCL=> ~ list.indexOf(999)", list.indexOf(999))
console.log("TCL=> ~ list.indexOf(999)", list.indexOf(2))
console.log("TCL=> ~ list.indexOf(999)", list.indexOf(888))
list.remove(999)
list.remove(0)
console.log("TCL=> ~ list", list.toString())
