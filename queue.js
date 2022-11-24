class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
      this.length++;
    } else {
      const temp = this.last;
      this.last = newNode;
      temp.next = this.last;
      this.length++;
    }
  }
  dequeue() {
    if (!this.first) return null;
    if (this.length === 1) {
      const temp = this.first;
      this.first = null;
      this.last = null;
      this.length--;
      return temp;
    } else {
      const temp = this.first;
      this.first = this.first.next;
      temp.next = null;
      this.length--;
      return temp;
    }
  }
}

const myQueue = new Queue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
