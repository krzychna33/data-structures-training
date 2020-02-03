const process = require('process');

class Node {
    constructor(key, next = null, prev = null) {
        this.key = key;
        this.next = next;
        this.prev = prev;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtBeginning(key) {
        let newNode = new Node(key);
        newNode.next = this.head;
        if (this.head !== null) {
            this.head.prev = newNode
        }
        this.head = newNode;
        newNode.prev = null;
        return this.head;
    }

    search(key) {
        let node = this.head;
        while (node != null && node.key !== key) {
            node = node.next;
        }
        return node;
    }

    delete(node) {
        if (node.prev !== null) {
            node.prev.next = node.next;
        } else {
            this.head = node.next;
        }
        if (node.next != null) {
            node.next.prev = node.prev;
        }
    }

    printList() {
        let node = this.head;
        while(node) {
            process.stdout.write(node.key + " --- > ");
            node = node.next;
        }
    }
}

list = new LinkedList();
console.log(list.insertAtBeginning(15));
console.log(list.insertAtBeginning(135));
console.log(list.insertAtBeginning(3));
list.printList()
list.delete(list.search(135));
console.log(list.search(15));
list.printList()

