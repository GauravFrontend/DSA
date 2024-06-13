class Node {
    // below is just creating of node, there is somehow
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    // khali box
    // 1st object ko head bolte h
    // last ko tail bolte h
    constructor() {
        this.head = null
    }
}

// add at begining 
LinkedList.prototype.insertAtBeginning = function (data) {
    const newNode = new Node(data)
    this.head = newNode;
}

// insert at the end

LinkedList.prototype.insertAtTheEnd = function (data) {
    const newNode = new Node(data);
    // niche wala if() mai hum shortcut mar rhe h upr wala use krlenge kyuki kind of khali hai
    // upr wala hi hai bus direct likh diya h
    if (!this.head == null) {
        this.head = newNode
        return
    }
    //assumed head hi last hai
    let lastNode = this.head
    // last null milte h new node add krdenge 
    // or agr nhi milega to jump krna pdega next next node pr 
    while (lastNode.next) {
        // jab tak lastNode.next true hai 
        // null ki value false hoti hai
        lastNode = lastNode.next
    }
    lastNode.next = newNode

}

// insert at a give node ( Previous node diya jata hai )

LinkedList.prototype.insterAfter = function (prevNode, data) {
    if (!prevNode) {
        console.log("we dont have prevNode");
        return
    }
    // to yha pr hua ye ki , example 6.next prevNode tha iske next ko newNode.next ko de diya, and 6.next ko overide krke newNode ki location de di 
    const newNode = new Node(data, prevNode.next)
    prevNode.next = newNode
}


// delete first node

LinkedList.prototype.deleteFirstNode = function () {
    // head ko move krdiya bus trick krke
    if (this.head) {
        this.head = this.head.next
    }
}

// last node delete 
// second last node
LinkedList.prototype.deleteLastNode = function () {
    // assume head is second last
    if (!this.head) {
        return
    }
    if (!this.head.next) {
        return
    }
    let secondLast = this.head
    while (secondLast.next.next) {
        secondLast = secondLast.next
    }
    secondLast.next = null
}


// delete at a given key 

LinkedList.prototype.deleteByKey = function (key) {
    // if list is empty
    if (!this.head) {
        return
    }
    // key head pr hi milgyi 

    if (this.head.data == key) {
        this.head = this.head.next;
        return
    }

    // ab dekte h puri linked list pr tranverse krke 

    let currentValue = this.head

    while (currentValue.next !== null) {
        if (currentValue.next.data === key) {
            currentValue.next = currentValue.next.next
            return
        }
        // below line loop chla rhi hai
        currentValue = currentValue.next
    }
    console.log("is loop se bhr agya to NO Node Found");
}

// serach operation
// bus search krne ko kha tha key mili ya nhi , isliye true and false hi return horha hai
LinkedList.prototype.search = function (key) {

    let currentValue = this.head
    while (currentValue) {
        if (currentValue.data === key) {
            return true
        }
    }
    return false
}

//traversal -- 

LinkedList.prototype.printList = function(){
    let current = this.head
    let listValue = []
    while (current) {
        listValue.push(current.data)
        current = current.next
    }
    console.log(listValue.join(" -> "));
} 
// bolke smjhna hoga tabhi smjh m ayega 

// reverse a linked list 
// have to revise this again 

LinkedList.prototype.reverseLinkedList = function(){
   let current = this.head
   let prev = null
   let next = null
   
   while (current) {
        next = current.next
        current.next = prev
        prev = current
        current = next
   }
   this.head = prev
}

// next is doubly linked list video