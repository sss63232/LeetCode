class Node {
  constructor(element) {
    this.element = element
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  removeAt(position) {
    if (position >= 0 && position < this.length) {
      if (!this.length) {
        this.head = null
        this.tail = null
        this.length--
        return null
      }

      let current
      if (position === 0) {
        current = this.head

        current.next.prev = null
        this.head = current.next
      } else if (position === this.length - 1) {
        current = this.tail
        current.prev.next = null
        this.tail = current.prev
      } else {
        current = this.head
        let previous = null
        while (position) {
          previous = current
          current = current.next
          position--
        }
        previous.next = current.next
        current.next.prev = previous
      }

      this.length--
      return current
    }
  }

  append(element) {
    const node = new Node(element)
    if (!this.length) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail

      this.tail = node
    }

    this.length++
  }

  insert(element, position) {
    if (position >= 0 && position <= this.length) {
      const node = new Node(element)

      if (!this.length) {
        this.head = node
        this.tail = node
      } else if (position === 0) {
        node.next = this.head
        this.head.prev = node
        this.head = node
      } else if (position === this.length) {
        this.tail.next = node
        node.prev = this.tail
        this.tail = node
      } else {
        let current = this.head
        let previous = null
        while (position) {
          current = current.next
          previous = current.prev

          position--
        }

        previous.next = node
        node.next = current
        node.prev = previous
        current.prev = node
      }

      this.length++
    }
  }

  toString() {
    if (!this.length) {
      return ""
    }

    let result = ""
    let current = this.head
    while (current) {
      result += `${current.element},`
      current = current.next
    }

    return result
  }
}

const list = new DoublyLinkedList()

list.append(0)
list.append(1)
list.append(2)
list.append(3)
console.log("TCL=> ~ list", list.toString())
console.log("TCL=> ~ list.length", list.length)
list.insert(888, 4)
console.log("TCL=> ~ list", list.toString())
console.log("TCL=> ~ list.length", list.length)
list.removeAt(1)
list.removeAt(1)
console.log("TCL=> ~ list", list.toString())
