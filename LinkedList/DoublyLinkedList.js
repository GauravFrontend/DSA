class Node {
    constructor(data, next = null, prev = null) {
        this.data = data
        this.next = next
        this.prev = prev
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }
}

//insert a node at start at dooubly list 

DoublyLinkedList.prototype.insertAtBeginning = function (data) {
    const newNode = new Node(data, this.head, null)
    if (this.head !== null) {
        this.head.prev = newNode;
    }
    this.head = newNode
    if (this.tail === null) {
        this.tail = newNode
    }
}

// insert a node at the end of the List 

DoublyLinkedList.prototype.insertAtEnd = function (data) {
    const newNode = new Node(data, null, this.tail)
    if (this.tail !== null) {
        this.tail.next = newNode
    }
    this.tail = newNode
    if (this.head === null) {
        this.head = newNode
    }
}

// 36:12:37

// insert after a given node 

DoublyLinkedList.prototype.insertAfter = function(prevNode,data){
    if (prevNode==null) {
        return
    }
    const newNode = new Node(data,prev.next,prev)

    if (prevNode.next !== next) {
        prevNode.next.prev = newNode
    }
    prevNode.next = newNode
    if (newNode.next == null) {
        this.tail = newNode
    }
}
