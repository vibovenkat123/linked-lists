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
    append(value) {
        let node = new nodeClass(value);
        let currentNode;
        if (this.head == null) {
            this.head = node;
        }
        else {
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
    prepend(value) {
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
