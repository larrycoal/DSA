class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.last = newNode;
    this.length = 1;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.top) {
      this.top = newNode;
      this.last = newNode;
      this.length = 1;
    } else {
      const temp = this.top;
      this.top = newNode;
      this.top.next = temp;
      this.length++;
    }
  }
  pop() {
    if (!this.top) return null;
    if (this.length === 1) {
      const temp = this.top;
      this.top = null;
      this.last = null;
      this.length--;
      return temp;
    } else {
      const temp = this.top;
      this.top = this.top.next;
      temp.next = null;
      this.length--;
      return temp;
    }
  }
}

const myStack = new Stack(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
