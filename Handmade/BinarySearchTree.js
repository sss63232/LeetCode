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
}

const tree = new BinarySearchTree()
tree.insert(3)
tree.insert(5)
tree.insert(1)
tree.insert(9)
tree.insert(7)
tree.inOrderTraverse(console.log)
console.log("TCL=> ~ ⬆️inOrderTraverse")
tree.preOrderTraverse(console.log)
console.log("TCL=> ~ ⬆️preOrderTraverse")
tree.postOrderTraverse(console.log)
console.log("TCL=> ~ ⬆️postOrderTraverse")

3
1, 5
7, 9
