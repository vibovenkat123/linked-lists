class nodeClass {
  value:any;
  nextNode:any;
  constructor(value:any, nextNode:any = null){
    this.value = value;
    this.nextNode = nextNode;
  }
}
class LinkedList {
  head:any;
  size:any;
  constructor(){
    this.head = null;
    this.size = 0;
  }
  prepend(value:any){
    this.head = new nodeClass(value, this.head)
  }
  printValues(){
    let currentNode = this.head
    while (currentNode){
      console.log(currentNode.value)
      currentNode = currentNode.nextNode;
    }
  }
}