class nodeClass {
  value: any;
  nextNode: any;
  constructor(value: any, nextNode: any = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
class LinkedList {
  head: any;
  size: any;
  constructor() {
    this.head = null;
    this.size = 0;
  }
  findHeadValue() {
    return this.head.value;
  }
  append(value: any) {
    let node: any = new nodeClass(value);
    let currentNode: any;
    if (this.head == null) {
      this.head = node;
    } else {
      currentNode = this.head;
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = node;
    }
    this.size++;
  }
  findSize() {
    return this.size;
  }
  prepend(value: any) {
    this.head = new nodeClass(value, this.head);
    this.size++;
  }
  at(index: number) {
    let currentNode = this.head;
    let currentIndex: number = 0;
    if (index < 0) {
      return "enter a positive value";
    } else {
      while (currentNode) {
        if (currentIndex === index) {
          return currentNode.value;
        }
        currentIndex++;
        currentNode = currentNode.nextNode;
      }
    }
  }
  pop() {
    let currentNode: any = this.head;
    let previousNode: any;
    while (currentNode.nextNode) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    previousNode.nextNode = null;
  }
  contains(value: any) {
    let currentNode: any = this.head;
    while (currentNode) {
      if (currentNode.value == value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }
  find(value: any) {
    if (this.contains(value)) {
      let currentNode = this.head;
      let index = 0;
      while (currentNode) {
        if (currentNode.value == value) {
          return index;
        }
        currentNode = currentNode.nextNode;
        index++;
      }
    } else {
      return null;
    }
  }
  findTailValue() {
    let currentNode = this.head;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    return currentNode.value;
  }
  printValues() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.nextNode;
    }
  }
}
