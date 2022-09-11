class nodeClass {
    value;
    nextNode;
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}
class LinkedList {
    head = null;
    constructor(headNode) {
        this.head = headNode;
        this.head.nextNode = null;
    }
    append(value) {
        let newNode = new nodeClass(value);
        let test = this.head;
        this.head.nextNode = newNode;
    }
}
