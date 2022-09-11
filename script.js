class nodeClass {
    value;
    nextNode;
    constructor(value, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}
class LinkedList {
    head;
    size;
    constructor() {
        this.head = null;
        this.size = 0;
    }
    prepend(value) {
        this.head = new nodeClass(value, this.head);
    }
}
