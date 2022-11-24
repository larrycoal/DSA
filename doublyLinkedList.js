class node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class doublyLinkedList {
  constructor(value) {
    const newNode = new node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
  push(value) {
    const newNode = new node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      this.length++;
    }
  }
  pop() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      const temp = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return temp;
    }
    const temp = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    temp.prev = null;
    this.length--;
    return temp;
  }
  unshift(value) {
    const newNode = new node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length = 1;
    } else {
      let temp = newNode;
      temp.next = this.head;
      this.head.prev = temp;
      this.head = temp;
      this.length++;
    }
    return this;
  }
  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
    } else {
      this.head = temp.next;
      this.head.prev = null;
      temp.next = null;
      this.length--;
    }
    return temp;
  }

  get(index) {
    if (index < 0 || index > this.lenght) return undefined;

    if (index > this.length / 2) {
      let temp = this.head;
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
      return temp;
    } else {
      let temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
      }
      return temp;
    }
  }
  set(value, index) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(value, index) {
    if (index === this.length + 1) return this.push(value);
    if (index === 0) return this.unshift(value);
    let prev = this.get(index - 1);
    let after = prev.next;
    let newNode = new node(value);
    if (prev) {
      prev.next = newNode;
      newNode.prev = prev;
      after.prev = newNode;
      newNode.next = after;
      this.length++;
      return true;
    }
    return false;
  }

  remove(index) {
    if (index === this.length + 1) return this.pop();
    if (index === 0) return this.shift();
    let temp = this.get(index);

    if (temp) {
      let prev = temp.prev;
      let after = temp.next;
      prev.next = after;
      after.prev = prev;
      temp.next = null;
      temp.prev = null;
      this.length--;
      return true;
    }
    return false;
  }
}

const doublyLinked = new doublyLinkedList(1);

doublyLinked.push(2);
doublyLinked.push(3);
doublyLinked.push(5);
