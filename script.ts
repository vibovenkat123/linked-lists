class nodeClass {
  value:any;
  nextNode:any;
  constructor(value:any){
    this.value = value;
    this.nextNode = null;
  }
}
class LinkedList {
  head:any = null
  constructor(headNode:any){
    this.head = headNode;
    this.head.nextNode = null
  }
  append(value:any){
    let newNode = new nodeClass(value);
    let test = this.head;
    this.head.nextNode = newNode
  }
}
