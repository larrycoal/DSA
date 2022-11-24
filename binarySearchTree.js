class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while (true) {
      if (newNode.value === temp.value) return undefined;
      if (newNode.value > temp.value) {
        if (!temp.right) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      } else {
        if (!temp.left) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      }
    }
  }
  contains(value) {
    if (!this.root) return false;
    let temp = this.root;
    while (temp) {
      if (value > temp.value) {
        temp = temp.right;
      } else if (value < temp.value) {
        temp = temp.left;
      } else {
        return true;
      }
    }
    return false;
  }
  minValue(currentNode) {
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }
  bfs() {
    let currentNode = this.root;
    let queue = [];
    let results = [];
    queue.push(currentNode);
    while (queue.length) {
      let temp = queue.shift();
      if (temp.right) queue.push(temp.right);
      if (temp.left) queue.push(temp.left);
      results.push(temp.value);
    }
    return results;
  }
  dfsPreorder() {
    let results = [];
    function traverse(currentNode) {
      results.push(currentNode.value);
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);
    }
    traverse(this.root);
    return results;
  }
  dfsPostorder() {
    let results = [];
    function traverse(currentNode) {
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);
      results.push(currentNode.value);
    }
    traverse(this.root);
    return results;
  }
  dfsInorder() {
    let results = [];
    function traverse(currentNode) {
      if (currentNode.left) traverse(currentNode.left);
      results.push(currentNode.value);
      if (currentNode.right) traverse(currentNode.right);
    }
    traverse(this.root);
    return results;
  }
}

const newBst = new BST();
newBst.insert(47);
newBst.insert(21);
newBst.insert(18);
newBst.insert(27);
newBst.insert(76);
newBst.insert(52);
newBst.insert(82);
