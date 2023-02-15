class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insertNode(treeRoot, node) {
    if (node.key < treeRoot.key) {
      if (treeRoot.left === null) {
        treeRoot.left = node
      } else {
        this.insertNode(treeRoot.left, node)
      }
    } else {
      if (treeRoot.right === null) {
        treeRoot.right = node
      } else {
        this.insertNode(treeRoot.right, node)
      }
    }
  }

  insert(key) {
    const node = new Node(key)
    if (!this.root) {
      this.root = node
    } else {
      this.insertNode(this.root, node)
    }
  }

  inOrderTraverse(callback) {
    this.inOrderTraverseByNode(this.root, callback)
  }

  inOrderTraverseByNode(treeRoot, callback) {
    if (treeRoot !== null) {
      this.inOrderTraverseByNode(treeRoot.left, callback)
      callback(treeRoot.key)
      this.inOrderTraverseByNode(treeRoot.right, callback)
    }
  }

  preOrderTraverse(callback) {
    this.preOrderTraverseByNode(this.root, callback)
  }

  preOrderTraverseByNode(treeRoot, callback) {
    if (treeRoot !== null) {
      callback(treeRoot.key)
      this.preOrderTraverseByNode(treeRoot.left, callback)
      this.preOrderTraverseByNode(treeRoot.right, callback)
    }
  }

  postOrderTraverse(callback) {
    this.postOrderTraverseByNode(this.root, callback)
  }

  postOrderTraverseByNode(treeRoot, callback) {
    if (treeRoot !== null) {
      this.postOrderTraverseByNode(treeRoot.left, callback)
      this.postOrderTraverseByNode(treeRoot.right, callback)
      callback(treeRoot.key)
    }
  }

  min() {
    return this.findMinFrom(this.root)
  }

  findMinFrom(rootNode) {
    if (!rootNode) {
      return null
    }

    let current = rootNode
    while (current.left) {
      current = current.left
    }
    return current.key
  }

  max() {
    return this.findMaxBy(this.root)
  }

  findMaxBy(rootNode) {
    if (!rootNode) {
      return null
    }

    let current = rootNode
    while (current.right) {
      current = current.right
    }
    return current.key
  }

  has(key) {
    return this.hasNode(this.root, key)
  }

  hasNode(rootNode, key) {
    if (!rootNode) {
      return false
    }

    if (key === rootNode.key) {
      return true
    }

    if (key > rootNode.key) {
      return this.hasNode(rootNode.right, key)
    } else {
      return this.hasNode(rootNode.left, key)
    }
  }
}

const tree = new BinarySearchTree()
tree.insert(3)
tree.insert(5)
tree.insert(99)
tree.insert(1)
tree.insert(0)
tree.insert(9)
tree.insert(7)
console.log("TCL=> ~ tree.min()", tree.min())
console.log("TCL=> ~ tree.max()", tree.max())
console.log("TCL=> ~ tree.has(100)", tree.has(100))
console.log("TCL=> ~ tree.has(9)", tree.has(9))
