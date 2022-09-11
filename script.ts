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
  printValues() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.nextNode;
    }
  }
}
